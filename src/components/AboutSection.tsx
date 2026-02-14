import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, FileCheck, TrendingUp, Building2, Users } from "lucide-react";

const values = [
  { icon: Target, label: "Strategic Location Development" },
  { icon: FileCheck, label: "Legal Clear Documentation" },
  { icon: TrendingUp, label: "High ROI Investment Opportunities" },
  { icon: Building2, label: "Modern Infrastructure Planning" },
  { icon: Users, label: "Customer-Centric Approach" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              A Name Built on
              <br />
              <span className="gold-text">Trust & Transparency</span>
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-8 text-lg">
              Shreedhar Group has been a pioneer in shaping Jaipur's real estate landscape. 
              With a vision to create world-class living spaces, we combine strategic location 
              selection with modern infrastructure and transparent dealings to deliver 
              unmatched value to our investors and homeowners.
            </p>

            {/* Founder Vision */}
            <div className="glass-card rounded-xl p-6 border-l-4 border-l-accent">
              <p className="font-serif text-foreground italic text-lg mb-3">
                "Our mission is to transform Bhankrota into Jaipur's most sought-after 
                residential destination, one project at a time."
              </p>
              <span className="font-sans text-sm text-accent font-semibold uppercase tracking-wider">
                — Founder, Shreedhar Group
              </span>
            </div>
          </motion.div>

          {/* Right - Values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass-card rounded-xl p-5 flex items-center gap-4 hover-lift cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <v.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="font-sans text-foreground font-medium">{v.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
