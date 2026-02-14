import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, MapPinned, TreePine, Building, Gem } from "lucide-react";

const reasons = [
  { icon: Building, title: "Growing Infrastructure", desc: "Rapid development of roads, markets, and institutions." },
  { icon: MapPinned, title: "Ajmer Road Connectivity", desc: "Direct access to NH-8 and Ajmer Road corridor." },
  { icon: TrendingUp, title: "Future Growth Potential", desc: "Designated as a key development zone by JDA." },
  { icon: TreePine, title: "Peaceful Residential Area", desc: "Away from city congestion, surrounded by greenery." },
  { icon: Gem, title: "Investment Appreciation", desc: "Consistent 15-25% annual property value growth." },
];

const stats = [
  { value: 25, suffix: "%", label: "Annual Price Growth" },
  { value: 100, suffix: "%", label: "Project Completion Rate" },
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Happy Families" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = duration / value;
    const timer = setInterval(() => {
      start++;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold">
      {count}{suffix}
    </span>
  );
};

const WhyBhankrotaSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-bhankrota" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-sans text-sm uppercase tracking-[0.3em] text-gold mb-4 block">
            Location Advantage
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Why Invest in <span className="text-gradient-gold">Bhankrota?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 text-center hover-lift shadow-premium border border-border"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <r.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-base font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="font-sans text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter value={s.value} suffix={s.suffix} />
              <p className="font-sans text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBhankrotaSection;
