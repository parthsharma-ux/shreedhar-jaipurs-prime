import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Why Bhankrota", href: "#why-bhankrota" },
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
        scrolled ? "glass-dark py-3 shadow-2xl" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold text-primary-foreground tracking-wide">
            SHREEDHAR
          </span>
          <span className="gold-text font-serif text-sm tracking-[0.3em] uppercase">Group</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-sans text-primary-foreground/80 hover:text-secondary transition-colors tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:+919999999999">
            <Button
              size="sm"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-sans uppercase tracking-wider text-xs px-6"
            >
              <Phone className="w-3 h-3 mr-2" />
              Call Now
            </Button>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="lg:hidden glass-dark border-t border-secondary/20 px-4 py-6 flex flex-col gap-4 animate-fade-in">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-primary-foreground/80 hover:text-secondary transition-colors uppercase text-sm tracking-wider font-sans"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:+919999999999">
            <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-sans uppercase tracking-wider text-xs">
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
