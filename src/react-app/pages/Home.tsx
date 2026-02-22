import Navbar from "@/react-app/components/Navbar";
import Hero from "@/react-app/components/Hero";
import About from "@/react-app/components/About";
import Menu from "@/react-app/components/Menu";
import Services from "@/react-app/components/Services";
import Facilities from "@/react-app/components/Facilities";
import Booking from "@/react-app/components/Booking";
import Footer from "@/react-app/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      
      <Menu />

      <Services />
      <Facilities />

      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary font-medium tracking-wide uppercase text-sm">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
              Find Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Reach out for reservations, events, or special requests.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                +91 98765 43210
              </a>
            </div>
            <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:reservations@hiddentable.com" className="text-muted-foreground hover:text-primary transition-colors">
                reservations@hiddentable.com
              </a>
            </div>
            <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Address</h3>
              <address className="text-muted-foreground not-italic">
                Connaught Place<br />
                New Delhi 110001
              </address>
            </div>
          </div>
        </div>
      </section>

      <Booking />

      <Footer />
    </div>
  );
}
