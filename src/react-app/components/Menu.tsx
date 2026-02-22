import { useState } from "react";
import { menuCategories } from "@/data/menu";
import { Sparkles, Leaf, Wine, GlassWater } from "lucide-react";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  const currentCategory = menuCategories.find((cat) => cat.id === activeCategory);

  const getTagIcon = (tag: string) => {
    switch (tag) {
      case "signature":
        return <Sparkles className="w-3 h-3" />;
      case "vegetarian":
        return <Leaf className="w-3 h-3" />;
      case "red":
      case "white":
      case "champagne":
        return <Wine className="w-3 h-3" />;
      case "non-alcoholic":
        return <GlassWater className="w-3 h-3" />;
      default:
        return null;
    }
  };

  const getTagStyle = (tag: string) => {
    switch (tag) {
      case "signature":
        return "bg-primary/20 text-primary";
      case "vegetarian":
        return "bg-green-500/20 text-green-400";
      case "red":
        return "bg-red-500/20 text-red-400";
      case "white":
        return "bg-yellow-500/20 text-yellow-400";
      case "champagne":
        return "bg-amber-500/20 text-amber-400";
      case "non-alcoholic":
        return "bg-blue-500/20 text-blue-400";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="menu" className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">
            Our Menu
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Culinary <span className="text-primary">Secrets</span> Await
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each dish tells a story, crafted with the finest ingredients and 
            presented with artistry that delights all senses.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-card/80 text-muted-foreground hover:text-foreground hover:bg-card border border-border"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        {currentCategory && (
          <div className="animate-in fade-in duration-300">
            <p className="text-center text-muted-foreground mb-8 italic">
              {currentCategory.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {currentCategory.items.map((item, index) => (
                <div
                  key={index}
                  className="group bg-card/60 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card/80 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-primary font-bold text-lg whitespace-nowrap">
                      ${item.price}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>
                  
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${getTagStyle(tag)}`}
                        >
                          {getTagIcon(tag)}
                          {tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Please inform your server of any allergies or dietary requirements.
            <br />
            Prices are in USD. A 20% gratuity is added for parties of 6 or more.
          </p>
        </div>
      </div>
    </section>
  );
}
