import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileCheck, Banknote, MapPin, Clock, TrendingUp } from "lucide-react";

const features = [
  { icon: FileCheck, title: "Clear Legal Documentation", desc: "All projects come with fully verified legal documents and government approvals." },
  { icon: Banknote, title: "Transparent Pricing", desc: "No hidden charges. What you see is what you pay — complete transparency." },
  { icon: MapPin, title: "Prime Location Projects", desc: "Strategically located developments with excellent connectivity and growth." },
  { icon: Clock, title: "On-Time Possession", desc: "100% track record of delivering projects within the committed timeline." },
  { icon: TrendingUp, title: "High Appreciation Potential", desc: "Properties in our projects have shown consistent 15-25% annual appreciation." },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-sans text-sm uppercase tracking-[0.3em] text-gold mb-4 block">
            Our Promise
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient-gold">Shreedhar Group?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-3d bg-background rounded-2xl p-8 group shadow-premium border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 shadow-gold-glow">
                <f.icon className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {f.title}
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
