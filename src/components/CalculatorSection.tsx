import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calculator, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const CalculatorSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [plotSize, setPlotSize] = useState(200);
  const [rate, setRate] = useState(18000);
  const [appreciation, setAppreciation] = useState(15);
  const [showResult, setShowResult] = useState(false);

  const currentValue = plotSize * rate;
  const futureValue = currentValue * Math.pow(1 + appreciation / 100, 5);
  const profit = futureValue - currentValue;

  const formatINR = (n: number) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

  return (
    <section id="calculator" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-sans text-sm uppercase tracking-[0.3em] text-accent mb-4 block">
            Smart Investment
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Calculate Your <span className="gold-text">Investment Potential</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <Label className="font-sans text-sm text-muted-foreground uppercase tracking-wider mb-2 block">
                  Plot Size (sq.yd.)
                </Label>
                <Input
                  type="number"
                  value={plotSize}
                  onChange={(e) => { setPlotSize(Number(e.target.value)); setShowResult(false); }}
                  className="font-sans text-lg"
                />
              </div>

              <div>
                <Label className="font-sans text-sm text-muted-foreground uppercase tracking-wider mb-2 block">
                  Current Rate (₹ per sq.yd.)
                </Label>
                <Input
                  type="number"
                  value={rate}
                  onChange={(e) => { setRate(Number(e.target.value)); setShowResult(false); }}
                  className="font-sans text-lg"
                />
              </div>

              <div>
                <Label className="font-sans text-sm text-muted-foreground uppercase tracking-wider mb-3 block">
                  Expected Appreciation: {appreciation}%
                </Label>
                <Slider
                  value={[appreciation]}
                  onValueChange={(v) => { setAppreciation(v[0]); setShowResult(false); }}
                  min={5}
                  max={30}
                  step={1}
                  className="w-full"
                />
              </div>

              <Button
                onClick={() => setShowResult(true)}
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-sans uppercase tracking-wider py-6"
              >
                <Calculator className="w-4 h-4 mr-2" /> Calculate Returns
              </Button>
            </div>

            {/* Result */}
            <div className="flex items-center justify-center">
              {showResult ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center w-full space-y-6"
                >
                  <div>
                    <p className="font-sans text-sm text-muted-foreground uppercase tracking-wider mb-1">Current Investment</p>
                    <p className="font-serif text-2xl font-bold text-foreground">{formatINR(currentValue)}</p>
                  </div>
                  <div className="h-px bg-border" />
                  <div>
                    <p className="font-sans text-sm text-muted-foreground uppercase tracking-wider mb-1">Value After 5 Years</p>
                    <p className="font-serif text-3xl md:text-4xl font-bold gold-text">{formatINR(futureValue)}</p>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-center justify-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span className="font-sans text-lg font-semibold text-green-600">
                      Potential Profit: {formatINR(profit)}
                    </span>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center">
                  <Calculator className="w-16 h-16 text-accent/30 mx-auto mb-4" />
                  <p className="font-sans text-muted-foreground">
                    Enter your details and click calculate to see your projected returns.
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorSection;
