import { motion } from "framer-motion";
import { ArrowRight, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-charcoal">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
          style={{ objectFit: "cover" }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-28 md:pt-24 pb-12">
        <div className="max-w-4xl">
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-full px-3 md:px-4 py-2 mb-4 md:mb-6"
          >
            <Shield className="w-4 h-4 text-gold" />
            <span className="text-sm font-sans text-gold tracking-wider uppercase">
              Trusted Real Estate Developer in Jaipur
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6"
          >
            Building Jaipur's Future,
            <br />
            <span className="text-gradient-gold">One Landmark at a Time.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-sans text-lg md:text-xl text-cream/70 max-w-2xl mb-10"
          >
            Premium Residential & Plotting Developments in Bhankrota, Jaipur.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#projects">
              <Button
                size="lg"
                className="bg-gradient-gold text-charcoal hover:opacity-90 font-sans uppercase tracking-widest text-sm px-8 py-6 shadow-gold-glow"
              >
                View Ongoing Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-gold/40 text-cream hover:bg-gold/10 font-sans uppercase tracking-widest text-sm px-8 py-6"
              >
                Book Site Visit
                <MapPin className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
