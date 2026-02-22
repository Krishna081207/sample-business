import { Users, PartyPopper, ChefHat, Truck, GlassWater, Gift } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Private Dining",
    description:
      "Exclusive rooms for intimate gatherings of 8-20 guests. Perfect for celebrations, business dinners, or special occasions.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
  },
  {
    icon: PartyPopper,
    title: "Event Hosting",
    description:
      "Transform our space for your milestone moments. Weddings, anniversaries, corporate events — all tailored to perfection.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
  },
  {
    icon: ChefHat,
    title: "Chef's Table Experience",
    description:
      "Sit at the heart of the action with our 6-seat chef's counter. Watch culinary magic unfold before your eyes.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80",
  },
  {
    icon: Truck,
    title: "Catering Services",
    description:
      "Bring The Hidden Table to you. Our team crafts bespoke menus for off-site events from 20 to 200 guests.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80",
  },
  {
    icon: GlassWater,
    title: "Wine Pairing Dinners",
    description:
      "Monthly curated experiences pairing rare vintages with exclusive tasting menus. Limited to 16 guests per evening.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80",
  },
  {
    icon: Gift,
    title: "Gift Experiences",
    description:
      "Give the gift of discovery. Our experience vouchers make unforgettable presents for food lovers.",
    image: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=600&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-600/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Beyond the <span className="text-primary">Ordinary</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every visit is an experience, but we offer so much more. From private celebrations 
            to culinary journeys, discover services crafted for those who seek the extraordinary.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-card/50 border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 -mt-12">
                <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
