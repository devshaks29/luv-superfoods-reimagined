import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/bundles", label: "Bundles" },
  { href: "/about", label: "Our Story" },
  { href: "/ingredients", label: "Ingredients" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const cartItemCount = 3; // Mock cart count

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top promo bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
        <span className="flex items-center justify-center gap-2">
          🍫 Free Shipping on Orders Over $125 | Use Code: <span className="font-bold">LUV20</span> for 20% Off
        </span>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-medium"
            : "bg-background"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-honey flex items-center justify-center shadow-gold">
                  <span className="font-serif text-primary font-bold text-lg">Luv</span>
                </div>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-medium text-muted-foreground whitespace-nowrap">
                  Superfoods
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-secondary relative py-2",
                    location.pathname === link.href
                      ? "text-secondary"
                      : "text-foreground"
                  )}
                >
                  {link.label}
                  {location.pathname === link.href && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <User className="w-5 h-5" />
              </Button>
              <Link to="/cart" className="relative">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="w-5 h-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-goji text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </Button>
              </Link>
              <Button variant="hero" size="sm" className="hidden md:flex" asChild>
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background animate-fade-in">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "py-3 px-4 rounded-lg font-medium transition-colors",
                    location.pathname === link.href
                      ? "bg-muted text-secondary"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="hero" className="mt-4" asChild>
                <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>
                  Shop Now
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
