import { useState, useEffect } from "react";
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare, CheckCircle, Loader2, MapPin } from "lucide-react";

const timeSlots = [
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", 
  "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM"
];

interface Table {
  id: number;
  table_number: string;
  capacity: number;
  location: string;
  isAvailable: boolean;
}

interface BookingConfirmation {
  reservationId: number;
  guestName: string;
  date: string;
  time: string;
  partySize: number;
  tableName?: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState({
    guestName: "",
    email: "",
    phone: "",
    partySize: 2,
    date: "",
    time: "",
    tableId: "",
    specialRequests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingTables, setIsLoadingTables] = useState(false);
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);
  const [availableTables, setAvailableTables] = useState<Table[]>([]);
  const [tableStats, setTableStats] = useState({ available: 0, total: 0 });

  // Fetch available tables when date, time, or party size changes
  useEffect(() => {
    const fetchAvailability = async () => {
      if (!formData.date || !formData.time) {
        setAvailableTables([]);
        setTableStats({ available: 0, total: 0 });
        return;
      }

      setIsLoadingTables(true);
      try {
        const params = new URLSearchParams({
          date: formData.date,
          time: formData.time,
          partySize: formData.partySize.toString(),
        });
        const response = await fetch(`/api/tables/availability?${params}`);
        const data = await response.json();
        
        if (response.ok) {
          setAvailableTables(data.tables);
          setTableStats({ available: data.availableCount, total: data.totalCount });
          // Reset table selection if previously selected table is no longer available
          if (formData.tableId) {
            const selectedTable = data.tables.find((t: Table) => t.id.toString() === formData.tableId);
            if (!selectedTable?.isAvailable) {
              setFormData(prev => ({ ...prev, tableId: "" }));
            }
          }
        }
      } catch (err) {
        console.error("Failed to fetch availability:", err);
      } finally {
        setIsLoadingTables(false);
      }
    };

    fetchAvailability();
  }, [formData.date, formData.time, formData.partySize]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          tableId: formData.tableId ? parseInt(formData.tableId) : null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create reservation");
      }

      setConfirmation({
        reservationId: data.reservationId,
        guestName: data.details.guestName,
        date: data.details.date,
        time: data.details.time,
        partySize: data.details.partySize,
        tableName: data.details.tableName,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setConfirmation(null);
    setFormData({
      guestName: "",
      email: "",
      phone: "",
      partySize: 2,
      date: "",
      time: "",
      tableId: "",
      specialRequests: "",
    });
    setAvailableTables([]);
    setTableStats({ available: 0, total: 0 });
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0];

  if (confirmation) {
    return (
      <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-8 md:p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Reservation Confirmed!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you, {confirmation.guestName}. We look forward to hosting you.
        </p>
        
        <div className="bg-background/50 rounded-xl p-6 mb-6 text-left space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Confirmation #</span>
            <span className="font-semibold">HTB-{confirmation.reservationId.toString().padStart(4, "0")}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Date</span>
            <span className="font-semibold">
              {new Date(confirmation.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Time</span>
            <span className="font-semibold">{confirmation.time}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Party Size</span>
            <span className="font-semibold">{confirmation.partySize} {confirmation.partySize === 1 ? "guest" : "guests"}</span>
          </div>
          {confirmation.tableName && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Table</span>
              <span className="font-semibold">{confirmation.tableName}</span>
            </div>
          )}
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          A confirmation email will be sent to your inbox shortly.
        </p>

        <button
          onClick={resetForm}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all"
        >
          Make Another Reservation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-8 md:p-10">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Guest Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            Full Name
          </label>
          <input
            type="text"
            name="guestName"
            value={formData.guestName}
            onChange={handleChange}
            required
            placeholder="John Smith"
            className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
        </div>

        {/* Party Size */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            Party Size
          </label>
          <select
            name="partySize"
            value={formData.partySize}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer"
          >
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i === 0 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            min={today}
            className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
        </div>

        {/* Time */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            Time
          </label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer"
          >
            <option value="">Select a time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        {/* Table Availability Section */}
        {formData.date && formData.time && (
          <div className="md:col-span-2 space-y-3">
            <label className="text-sm font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Select Table
              {isLoadingTables && <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />}
            </label>
            
            {/* Availability Summary */}
            {!isLoadingTables && tableStats.total > 0 && (
              <div className="flex items-center gap-2 text-sm">
                <span className={`font-semibold ${tableStats.available > 0 ? 'text-green-500' : 'text-destructive'}`}>
                  {tableStats.available} of {tableStats.total} tables available
                </span>
                <span className="text-muted-foreground">for your party size</span>
              </div>
            )}

            {/* Table Grid */}
            {!isLoadingTables && availableTables.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {availableTables.map((table) => (
                  <button
                    key={table.id}
                    type="button"
                    onClick={() => table.isAvailable && setFormData(prev => ({ ...prev, tableId: table.id.toString() }))}
                    disabled={!table.isAvailable}
                    className={`p-3 rounded-xl border-2 transition-all text-left ${
                      formData.tableId === table.id.toString()
                        ? 'border-primary bg-primary/10'
                        : table.isAvailable
                        ? 'border-border bg-background hover:border-primary/50 hover:bg-primary/5'
                        : 'border-border/50 bg-muted/30 opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm">{table.table_number}</span>
                      <span className={`w-2 h-2 rounded-full ${table.isAvailable ? 'bg-green-500' : 'bg-red-500'}`} />
                    </div>
                    <div className="text-xs text-muted-foreground">{table.location}</div>
                    <div className="text-xs text-muted-foreground">Seats {table.capacity}</div>
                  </button>
                ))}
              </div>
            ) : !isLoadingTables && formData.date && formData.time ? (
              <p className="text-sm text-muted-foreground">No tables available for your party size at this time.</p>
            ) : null}

            {/* Legend */}
            {!isLoadingTables && availableTables.length > 0 && (
              <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Available
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Reserved
                </span>
              </div>
            )}
          </div>
        )}

        {/* Special Requests */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-primary" />
            Special Requests
            <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            rows={3}
            placeholder="Allergies, celebrations, seating preferences..."
            className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
          />
        </div>
      </div>

      {error && (
        <div className="mt-6 p-4 bg-destructive/10 border border-destructive/30 rounded-xl text-destructive text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || (availableTables.length > 0 && !formData.tableId && !!formData.date && !!formData.time)}
        className="mt-8 w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Confirming...
          </>
        ) : (
          "Confirm Reservation"
        )}
      </button>

      <p className="mt-4 text-center text-sm text-muted-foreground">
        By booking, you agree to our reservation policy. Tables are held for 15 minutes.
      </p>
    </form>
  );
}
