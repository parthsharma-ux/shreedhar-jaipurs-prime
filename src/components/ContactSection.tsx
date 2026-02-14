import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-sans text-sm uppercase tracking-[0.3em] text-gold mb-4 block">Get in Touch</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Book Your <span className="text-gradient-gold">Site Visit</span>
          </h2>
          <p className="font-sans text-muted-foreground max-w-xl mx-auto">
            Visit our projects and experience the quality firsthand.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="bg-card rounded-2xl p-8 space-y-4 shadow-premium border border-border" onSubmit={(e) => e.preventDefault()}>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Site Visit Booking Form</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Full Name" className="font-sans" />
                <Input placeholder="Phone Number" type="tel" className="font-sans" />
              </div>
              <Input placeholder="Email Address" type="email" className="font-sans" />
              <Input placeholder="Preferred Date for Visit" type="date" className="font-sans" />
              <Textarea placeholder="Any specific requirements?" className="font-sans" rows={3} />
              <Button className="w-full bg-gradient-gold text-charcoal hover:opacity-90 font-sans uppercase tracking-wider py-6">
                Book Site Visit
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="tel:+919999999999" className="bg-card rounded-xl p-5 flex items-center gap-3 hover-lift shadow-premium border border-border">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">Call Us</p>
                  <p className="font-sans font-semibold text-foreground">+91 99999 99999</p>
                </div>
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="bg-card rounded-xl p-5 flex items-center gap-3 hover-lift shadow-premium border border-border">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">WhatsApp</p>
                  <p className="font-sans font-semibold text-foreground">Chat Now</p>
                </div>
              </a>
              <a href="mailto:info@shreedhargroup.com" className="bg-card rounded-xl p-5 flex items-center gap-3 hover-lift shadow-premium border border-border">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="font-sans font-semibold text-foreground text-sm">info@shreedhargroup.com</p>
                </div>
              </a>
              <div className="bg-card rounded-xl p-5 flex items-center gap-3 shadow-premium border border-border">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">Office</p>
                  <p className="font-sans font-semibold text-foreground text-sm">Bhankrota, Jaipur</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-border h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28477.16091648413!2d75.6832!3d26.8547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b8d36b556b8e84e!2sBhankrota%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Shreedhar Group Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
