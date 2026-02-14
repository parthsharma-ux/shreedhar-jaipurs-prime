import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Why Bhankrota", href: "#why-bhankrota" },
  { label: "AI Analyzer", href: "#ai-analyzer" },
  { label: "Calculator", href: "#calculator" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/90 backdrop-blur-xl py-3 shadow-2xl border-b border-gold/10"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold text-cream tracking-wide">
            SHREEDHAR
          </span>
          <span className="text-gradient-gold font-serif text-sm tracking-[0.3em] uppercase">Group</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-sans text-cream/80 hover:text-gold transition-colors tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:+919999999999">
            <Button
              size="sm"
              className="bg-gradient-gold text-charcoal hover:opacity-90 font-sans uppercase tracking-wider text-xs px-6"
            >
              <Phone className="w-3 h-3 mr-2" />
              Call Now
            </Button>
          </a>
        </nav>

        <button
          className="lg:hidden text-cream"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-charcoal/95 backdrop-blur-xl border-t border-gold/10 px-4 py-6 flex flex-col gap-4 animate-fade-in-down">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream/80 hover:text-gold transition-colors uppercase text-sm tracking-wider font-sans"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:+919999999999">
            <Button className="w-full bg-gradient-gold text-charcoal hover:opacity-90 font-sans uppercase tracking-wider text-xs">
              <Phone className="w-3 h-3 mr-2" />
              Call Now
            </Button>
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
