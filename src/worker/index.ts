import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();

// Get available tables for a specific date, time, and party size
app.get("/api/tables/availability", async (c) => {
  const date = c.req.query("date");
  const time = c.req.query("time");
  const partySize = parseInt(c.req.query("partySize") || "1");

  if (!date || !time) {
    return c.json({ error: "Date and time are required" }, 400);
  }

  try {
    // Get all tables that can accommodate the party size
    const { results: allTables } = await c.env.DB.prepare(
      `SELECT * FROM tables WHERE capacity >= ? ORDER BY capacity ASC`
    ).bind(partySize).all();

    // Get tables that are already reserved for this date and time
    const { results: reservedTables } = await c.env.DB.prepare(
      `SELECT table_id FROM reservations 
       WHERE reservation_date = ? 
       AND reservation_time = ? 
       AND status != 'cancelled'
       AND table_id IS NOT NULL`
    ).bind(date, time).all();

    const reservedTableIds = new Set(reservedTables.map((r: any) => r.table_id));

    // Mark tables as available or reserved
    const tablesWithAvailability = allTables.map((table: any) => ({
      ...table,
      isAvailable: !reservedTableIds.has(table.id),
    }));

    return c.json({ 
      tables: tablesWithAvailability,
      availableCount: tablesWithAvailability.filter((t: any) => t.isAvailable).length,
      totalCount: tablesWithAvailability.length,
    });
  } catch (error) {
    console.error("Failed to check availability:", error);
    return c.json({ error: "Failed to check availability" }, 500);
  }
});

// Create a new reservation
app.post("/api/reservations", async (c) => {
  const body = await c.req.json();
  const { guestName, email, phone, partySize, date, time, tableId, specialRequests } = body;

  // Validate required fields
  if (!guestName || !email || !partySize || !date || !time) {
    return c.json({ error: "Missing required fields" }, 400);
  }

  // Validate party size
  if (partySize < 1 || partySize > 20) {
    return c.json({ error: "Party size must be between 1 and 20" }, 400);
  }

  // Validate date is not in the past
  const reservationDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (reservationDate < today) {
    return c.json({ error: "Cannot book a date in the past" }, 400);
  }

  // If a table is selected, verify it's still available
  if (tableId) {
    const { results: existingReservations } = await c.env.DB.prepare(
      `SELECT id FROM reservations 
       WHERE table_id = ? 
       AND reservation_date = ? 
       AND reservation_time = ? 
       AND status != 'cancelled'`
    ).bind(tableId, date, time).all();

    if (existingReservations.length > 0) {
      return c.json({ error: "This table is no longer available. Please select another." }, 400);
    }

    // Verify table capacity
    const { results: tableInfo } = await c.env.DB.prepare(
      `SELECT capacity FROM tables WHERE id = ?`
    ).bind(tableId).all();

    if (tableInfo.length === 0) {
      return c.json({ error: "Invalid table selection" }, 400);
    }

    if ((tableInfo[0] as { capacity: number }).capacity < partySize) {
      return c.json({ error: "Selected table cannot accommodate your party size" }, 400);
    }
  }

  try {
    const result = await c.env.DB.prepare(
      `INSERT INTO reservations (guest_name, email, phone, party_size, reservation_date, reservation_time, table_id, special_requests)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(guestName, email, phone || null, partySize, date, time, tableId || null, specialRequests || null)
      .run();

    const reservationId = result.meta.last_row_id;

    // Get table info for confirmation
    let tableName = null;
    if (tableId) {
      const { results: tableData } = await c.env.DB.prepare(
        `SELECT table_number, location FROM tables WHERE id = ?`
      ).bind(tableId).all();
      if (tableData.length > 0) {
        tableName = `${tableData[0].table_number} (${tableData[0].location})`;
      }
    }

    return c.json({
      success: true,
      message: "Reservation confirmed",
      reservationId,
      details: {
        guestName,
        date,
        time,
        partySize,
        tableName,
      },
    });
  } catch (error) {
    console.error("Failed to create reservation:", error);
    return c.json({ error: "Failed to create reservation" }, 500);
  }
});

// Get all reservations (for admin purposes)
app.get("/api/reservations", async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      `SELECT r.*, t.table_number, t.location 
       FROM reservations r 
       LEFT JOIN tables t ON r.table_id = t.id 
       ORDER BY reservation_date DESC, reservation_time DESC`
    ).all();

    return c.json({ reservations: results });
  } catch (error) {
    console.error("Failed to fetch reservations:", error);
    return c.json({ error: "Failed to fetch reservations" }, 500);
  }
});

export default app;
