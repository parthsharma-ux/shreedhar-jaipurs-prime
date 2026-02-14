import { motion } from "framer-motion";
import { ArrowRight, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-secondary/30 bg-navy/40 backdrop-blur-md"
        >
          <Shield className="w-4 h-4 text-secondary" />
          <span className="text-sm font-sans text-secondary tracking-wider uppercase">
            Trusted Real Estate Developer in Jaipur
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-5xl mx-auto mb-6"
        >
          Building Jaipur's Future,
          <br />
          <span className="gold-text">One Landmark at a Time.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-sans text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10"
        >
          Premium Residential & Plotting Developments in Bhankrota, Jaipur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#projects">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-sans uppercase tracking-widest text-sm px-8 py-6"
            >
              View Ongoing Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
          <a href="#contact">
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-sans uppercase tracking-widest text-sm px-8 py-6"
            >
              Book Site Visit
              <MapPin className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
