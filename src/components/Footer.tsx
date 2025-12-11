import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-3xl mb-3">
              Subscribe & Get 20% Off
            </h3>
            <p className="text-primary-foreground/70 mb-6">
              Be the first to know about new flavors, exclusive offers, and superfood tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent"
              />
              <Button variant="hero" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-honey flex items-center justify-center">
                <span className="font-serif text-primary font-bold">Luv</span>
              </div>
              <span className="font-serif text-xl font-semibold">Superfoods</span>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-4 leading-relaxed">
              Handcrafted raw dark chocolate infused with adaptogens, raw honey, and superfoods. 
              Made with love, for those you love.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">All Products</Link></li>
              <li><Link to="/bundles" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">Bundles & Gifts</Link></li>
              <li><Link to="/shop?bestsellers" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">Best Sellers</Link></li>
              <li><Link to="/shop?new" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">New Arrivals</Link></li>
              <li><Link to="/subscriptions" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">Subscribe & Save</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">Our Story</Link></li>
              <li><Link to="/ingredients" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">Ingredients</Link></li>
              <li><Link to="/blog" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">Blog</Link></li>
              <li><Link to="/faq" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-accent" />
                <span className="text-primary-foreground/70">hello@luvsuperfoods.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-accent" />
                <span className="text-primary-foreground/70">(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/70">Austin, Texas</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10">
              <p className="text-xs text-primary-foreground/60">
                🌿 Organic • Dairy-Free • Soy-Free • Gluten-Free • Non-GMO • Paleo
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2024 Luv Superfoods. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
            <Link to="/shipping" className="hover:text-primary-foreground transition-colors">Shipping Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
