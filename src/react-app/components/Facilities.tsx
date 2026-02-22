import { Armchair, Wine, TreePalm, Music, Wifi, Accessibility, Car, Shield } from "lucide-react";

const facilities = [
  {
    icon: Armchair,
    name: "Lounge Bar",
    description: "Pre-dinner cocktails in our intimate lounge setting",
  },
  {
    icon: Wine,
    name: "Wine Cellar",
    description: "500+ curated labels from around the world",
  },
  {
    icon: TreePalm,
    name: "Garden Terrace",
    description: "Al fresco dining under string lights",
  },
  {
    icon: Music,
    name: "Live Music",
    description: "Jazz performances every Friday & Saturday",
  },
  {
    icon: Wifi,
    name: "High-Speed WiFi",
    description: "Complimentary connectivity throughout",
  },
  {
    icon: Accessibility,
    name: "Full Accessibility",
    description: "Wheelchair access and accessible facilities",
  },
  {
    icon: Car,
    name: "Valet Parking",
    description: "Complimentary valet service for guests",
  },
  {
    icon: Shield,
    name: "Private Entrances",
    description: "Discreet entry for VIP guests",
  },
];

export default function Facilities() {
  return (
    <section className="py-24 px-6 bg-card/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-primary font-medium tracking-wide uppercase text-sm">
              Our Facilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Every Detail <span className="text-primary">Considered</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              From the moment you arrive to the final farewell, every aspect of your visit 
              has been thoughtfully designed. Our facilities ensure comfort, convenience, 
              and an atmosphere that enhances every moment.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {facilities.map((facility) => (
                <div
                  key={facility.name}
                  className="group flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 hover:bg-background transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <facility.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{facility.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {facility.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=500&q=80"
                    alt="Bar area"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=500&q=80"
                    alt="Wine selection"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?w=500&q=80"
                    alt="Outdoor terrace"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&q=80"
                    alt="Interior ambiance"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg shadow-primary/30">
              <span className="font-semibold">Est. 2019</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
