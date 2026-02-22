import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-amber-700 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-semibold">The Hidden Table</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              An exclusive dining experience hidden in plain sight. 
              Discover culinary secrets that will transform your evening.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#book" className="hover:text-primary transition-colors">Reservations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Monday - Friday: 6 PM - 12 AM</li>
              <li>Saturday: 5 PM - 1 AM</li>
              <li>Sunday: Private Events Only</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 The Hidden Table. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-full bg-card hover:bg-primary/20 transition-colors group">
              <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
            </a>
            <a href="#" className="p-2 rounded-full bg-card hover:bg-primary/20 transition-colors group">
              <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
            </a>
            <a href="#" className="p-2 rounded-full bg-card hover:bg-primary/20 transition-colors group">
              <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
