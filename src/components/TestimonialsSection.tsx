import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Rajesh Sharma", role: "Investor", text: "Investing with Shreedhar Group was the best decision I made. My plot's value has appreciated by 40% in just 2 years. Completely transparent process.", stars: 5 },
  { name: "Priya Agarwal", role: "Homeowner", text: "We were looking for a peaceful plot near Jaipur and Shreedhar Group delivered beyond expectations. The legal documentation was crystal clear.", stars: 5 },
  { name: "Vikram Singh", role: "NRI Investor", text: "Being an NRI, I was skeptical about investing in Jaipur. Shreedhar Group's team handled everything professionally. Highly recommended.", stars: 5 },
  { name: "Anita Meena", role: "First-time Buyer", text: "As a first-time buyer, I was nervous. The team guided me through every step. On-time possession and great infrastructure.", stars: 4 },
  { name: "Deepak Joshi", role: "Business Owner", text: "I've purchased plots in three of their projects. Appreciation has been consistent and legal clarity gives me peace of mind.", stars: 5 },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-charcoal relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-sans text-sm uppercase tracking-[0.3em] text-gold mb-4 block">Client Stories</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-cream">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-charcoal-light/50 backdrop-blur-sm border border-gold/10 rounded-2xl p-8 md:p-12 text-center">
            <Quote className="w-10 h-10 text-gold/30 mx-auto mb-6" />
            <motion.div key={current} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <p className="font-serif text-xl md:text-2xl text-cream/90 italic leading-relaxed mb-6">
                "{testimonials[current].text}"
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < testimonials[current].stars ? "text-gold fill-gold" : "text-cream/20"}`} />
                ))}
              </div>
              <p className="font-sans font-semibold text-cream">{testimonials[current].name}</p>
              <p className="font-sans text-sm text-cream/50">{testimonials[current].role}</p>
            </motion.div>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-cream hover:bg-gold/10 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-gold w-6" : "bg-cream/30"}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-cream hover:bg-gold/10 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
