import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Maximize, IndianRupee, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const projects = [
  {
    name: "Shreedhar Enclave",
    location: "Bhankrota, Jaipur",
    plotSize: "100 – 300 sq.yd.",
    price: "₹15,000 – ₹22,000 / sq.yd.",
    status: "Ongoing",
    amenities: ["Gated Community", "24/7 Security", "Park & Garden", "Wide Roads", "Water Supply", "Underground Electricity"],
    description: "A premium gated plotting project offering world-class amenities in the heart of Bhankrota.",
  },
  {
    name: "Shreedhar Heights",
    location: "Bhankrota Main Road",
    plotSize: "150 – 500 sq.yd.",
    price: "₹18,000 – ₹28,000 / sq.yd.",
    status: "Ongoing",
    amenities: ["Club House", "Swimming Pool", "Gym", "Children's Play Area", "Temple", "Commercial Complex"],
    description: "An ultra-premium residential project with resort-style living near Ajmer Road.",
  },
  {
    name: "Shreedhar Garden City",
    location: "Near Bagru Bypass",
    plotSize: "100 – 250 sq.yd.",
    price: "₹12,000 – ₹18,000 / sq.yd.",
    status: "Completed",
    amenities: ["Landscaped Gardens", "Jogging Track", "Street Lights", "Drainage System", "Boundary Wall"],
    description: "Successfully delivered project with 100% possession. Testimony to on-time delivery.",
  },
  {
    name: "Shreedhar Palm Residency",
    location: "Bhankrota Extension",
    plotSize: "120 – 400 sq.yd.",
    price: "₹16,000 – ₹24,000 / sq.yd.",
    status: "Ongoing",
    amenities: ["Vastu Compliant", "Rain Water Harvesting", "CCTV Surveillance", "Community Hall", "Senior Citizen Area"],
    description: "Thoughtfully planned residential project with Vastu-compliant plots and sustainable infrastructure.",
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-charcoal relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-sans text-sm uppercase tracking-[0.3em] text-gold mb-4 block">
            Our Portfolio
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-cream mb-4">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="font-sans text-cream/50 max-w-xl mx-auto">
            Discover premium plotting and residential developments designed for modern living.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-3d bg-charcoal-light/50 backdrop-blur-sm border border-gold/10 rounded-2xl p-6 md:p-8 cursor-pointer group"
              onClick={() => setSelected(p)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-cream mb-1">
                    {p.name}
                  </h3>
                  <p className="font-sans text-cream/50 text-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {p.location}
                  </p>
                </div>
                <span
                  className={`text-xs font-sans font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                    p.status === "Ongoing"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-gold/20 text-gold"
                  }`}
                >
                  {p.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-cream/70 font-sans text-sm">
                  <Maximize className="w-4 h-4 text-gold" />
                  {p.plotSize}
                </div>
                <div className="flex items-center gap-2 text-cream/70 font-sans text-sm">
                  <IndianRupee className="w-4 h-4 text-gold" />
                  {p.price}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {p.amenities.slice(0, 3).map((a) => (
                    <span key={a} className="text-xs font-sans text-cream/40 bg-cream/5 px-2 py-1 rounded">
                      {a}
                    </span>
                  ))}
                </div>
                <ArrowRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl">{selected.name}</DialogTitle>
                <p className="font-sans text-muted-foreground text-sm flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {selected.location}
                </p>
              </DialogHeader>
              <div className="space-y-6 mt-4">
                <p className="font-sans text-muted-foreground leading-relaxed">{selected.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary rounded-lg p-4">
                    <span className="text-xs text-muted-foreground font-sans uppercase tracking-wider">Plot Size</span>
                    <p className="font-sans font-semibold text-foreground mt-1">{selected.plotSize}</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <span className="text-xs text-muted-foreground font-sans uppercase tracking-wider">Price Range</span>
                    <p className="font-sans font-semibold text-foreground mt-1">{selected.price}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-3">Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.amenities.map((a) => (
                      <span key={a} className="font-sans text-sm bg-gold/10 text-foreground px-3 py-1.5 rounded-full border border-gold/20">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-gradient-gold text-charcoal hover:opacity-90 font-sans uppercase tracking-wider">
                  <Download className="w-4 h-4 mr-2" /> Download Brochure
                </Button>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Inquiry Form</h4>
                  <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                    <Input placeholder="Your Name" className="font-sans" />
                    <Input placeholder="Phone Number" type="tel" className="font-sans" />
                    <Input placeholder="Email" type="email" className="font-sans" />
                    <Textarea placeholder="Your Message" className="font-sans" rows={3} />
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-sans uppercase tracking-wider text-sm">
                      Send Inquiry
                    </Button>
                  </form>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
