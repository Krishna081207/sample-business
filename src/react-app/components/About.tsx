import { Utensils, Wine, Clock, Sparkles } from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Secret Recipes",
    description: "Dishes crafted from generations of hidden culinary traditions",
  },
  {
    icon: Wine,
    title: "Curated Cellar",
    description: "Rare vintages and craft cocktails selected by our sommelier",
  },
  {
    icon: Clock,
    title: "Intimate Hours",
    description: "Open exclusively from 6 PM to midnight, by reservation only",
  },
  {
    icon: Sparkles,
    title: "Chef's Table",
    description: "Experience our kitchen's magic with private dining options",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Elegant dining experience"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-card/95 backdrop-blur-xl border border-border rounded-xl p-6 shadow-xl max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <p className="font-semibold">Award Winning</p>
                  <p className="text-sm text-muted-foreground">Since 2019</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Recognized by critics for our innovative approach to classic cuisine
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary font-medium tracking-wide uppercase text-sm">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              A Hidden Gem in the{" "}
              <span className="text-primary">Heart of the City</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Tucked away behind an unassuming facade, The Hidden Table has been 
              serving those who seek extraordinary dining experiences since 2019. 
              Our philosophy is simple: exceptional ingredients, masterful preparation, 
              and an atmosphere that makes every visit feel like discovering a secret.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group p-5 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all hover:bg-card"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
