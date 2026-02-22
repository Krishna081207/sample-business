import BookingForm from "./BookingForm";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Booking() {
  return (
    <section id="book" className="py-24 px-6 relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">
            Reservations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Reserve Your <span className="text-primary">Table</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Secure your spot at The Hidden Table. We recommend booking at least 48 hours 
            in advance, especially for weekend evenings.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <BookingForm />
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            {/* Hours */}
            <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">Opening Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Mon - Fri</span>
                  <span>6:00 PM - 12:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>5:00 PM - 1:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-primary">Private Events</span>
                </div>
              </div>
            </div>

            {/* Seat Availability */}
            <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Seat Availability</h3>
              <p className="text-sm text-muted-foreground">
                Seats and their availability at that slot.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">Contact Us</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  For same-day reservations or special requests:
                </p>
                <a href="tel:+919876543210" className="block font-medium hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
                <a href="mailto:reservations@hiddentable.com" className="block text-muted-foreground hover:text-primary transition-colors">
                  reservations@hiddentable.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">Location</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Look for the unmarked brass door between the bookshop and the florist.
              </p>
              <address className="text-sm not-italic">
                <br />
                Connaught Place<br />
                New Delhi,110001
              </address>
            </div>

            {/* Policy Note */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <h4 className="font-semibold text-primary mb-2">Reservation Policy</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Tables held for 15 minutes past booking time</li>
                <li>• Cancel at least 24 hours in advance</li>
                <li>• Large parties (8+) require deposit</li>
                <li>• Smart casual dress code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
