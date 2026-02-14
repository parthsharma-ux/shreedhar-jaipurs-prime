const Footer = () => (
  <footer className="bg-charcoal py-12 px-4 border-t border-gold/10">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-serif text-xl font-bold text-cream mb-2">
            SHREEDHAR <span className="text-gradient-gold">Group</span>
          </h3>
          <p className="font-sans text-sm text-cream/50 leading-relaxed">
            Trusted Real Estate Developer in Jaipur. Building premium residential & plotting projects in Bhankrota.
          </p>
        </div>
        <div>
          <h4 className="font-sans text-sm uppercase tracking-wider text-gold mb-3">Quick Links</h4>
          <div className="space-y-2">
            {["About", "Projects", "Why Bhankrota", "AI Analyzer", "Calculator", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`}
                className="block font-sans text-sm text-cream/50 hover:text-gold transition-colors"
              >{l}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-sans text-sm uppercase tracking-wider text-gold mb-3">SEO Keywords</h4>
          <p className="font-sans text-xs text-cream/30 leading-relaxed">
            Bhankrota plots, Jaipur real estate investment, residential plots in Jaipur,
            plots near Ajmer Road, JDA approved plots Jaipur, Shreedhar Group Jaipur
          </p>
        </div>
      </div>
      <div className="border-t border-cream/10 pt-6 text-center">
        <p className="font-sans text-xs text-cream/40">
          © {new Date().getFullYear()} Shreedhar Group. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
