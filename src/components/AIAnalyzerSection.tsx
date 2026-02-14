import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Sparkles, TrendingUp, Shield, AlertTriangle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface Analysis {
  score: number;
  verdict: string;
  appreciation: string;
  roi_5year: string;
  strengths: string[];
  risks: string[];
  recommendation: string;
  comparables: string;
  best_time: string;
}

const AIAnalyzerSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [location, setLocation] = useState("Bhankrota, Jaipur");
  const [budget, setBudget] = useState("5000000");
  const [plotSize, setPlotSize] = useState("200");
  const [purpose, setPurpose] = useState("investment");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);

  const handleAnalyze = async () => {
    setLoading(true);
    setAnalysis(null);

    try {
      const { data, error } = await supabase.functions.invoke("analyze-property", {
        body: { location, budget, plotSize, purpose },
      });

      if (error) throw error;
      if (data?.error) {
        toast({ title: "Analysis Error", description: data.error, variant: "destructive" });
        return;
      }

      setAnalysis(data.analysis);
    } catch (err: any) {
      toast({
        title: "Analysis Failed",
        description: err.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-500";
    if (score >= 60) return "text-gold";
    return "text-red-400";
  };

  return (
    <section id="ai-analyzer" className="section-padding bg-charcoal relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-full px-4 py-2 mb-6">
            <Brain className="w-4 h-4 text-gold" />
            <span className="text-sm font-sans text-gold tracking-wider uppercase">AI-Powered</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-cream mb-4">
            Property Investment <span className="text-gradient-gold">AI Analyzer</span>
          </h2>
          <p className="font-sans text-cream/50 max-w-xl mx-auto">
            Get instant AI-powered analysis of your property investment potential in Bhankrota, Jaipur.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-charcoal-light/50 backdrop-blur-sm border border-gold/10 rounded-2xl p-8"
          >
            <h3 className="font-serif text-xl font-semibold text-cream mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold" />
              Enter Property Details
            </h3>

            <div className="space-y-5">
              <div>
                <Label className="font-sans text-sm text-cream/60 uppercase tracking-wider mb-2 block">Location</Label>
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-charcoal border-gold/20 text-cream font-sans focus:border-gold"
                  placeholder="e.g., Bhankrota, Jaipur"
                />
              </div>

              <div>
                <Label className="font-sans text-sm text-cream/60 uppercase tracking-wider mb-2 block">Budget (₹)</Label>
                <Input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="bg-charcoal border-gold/20 text-cream font-sans focus:border-gold"
                  placeholder="e.g., 5000000"
                />
              </div>

              <div>
                <Label className="font-sans text-sm text-cream/60 uppercase tracking-wider mb-2 block">Plot Size (sq.yd.)</Label>
                <Input
                  type="number"
                  value={plotSize}
                  onChange={(e) => setPlotSize(e.target.value)}
                  className="bg-charcoal border-gold/20 text-cream font-sans focus:border-gold"
                  placeholder="e.g., 200"
                />
              </div>

              <div>
                <Label className="font-sans text-sm text-cream/60 uppercase tracking-wider mb-2 block">Purpose</Label>
                <Select value={purpose} onValueChange={setPurpose}>
                  <SelectTrigger className="bg-charcoal border-gold/20 text-cream font-sans focus:border-gold">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="investment">Investment</SelectItem>
                    <SelectItem value="residential">Residential (Self-use)</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="resale">Quick Resale</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleAnalyze}
                disabled={loading}
                className="w-full bg-gradient-gold text-charcoal hover:opacity-90 font-sans uppercase tracking-wider py-6 shadow-gold-glow"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Analyzing...
                  </>
                ) : (
                  <>
                    <Brain className="w-4 h-4 mr-2" /> Analyze Investment
                  </>
                )}
              </Button>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col"
          >
            {analysis ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-charcoal-light/50 backdrop-blur-sm border border-gold/10 rounded-2xl p-8 space-y-6 h-full"
              >
                {/* Score */}
                <div className="text-center">
                  <div className={`font-serif text-6xl font-bold ${getScoreColor(analysis.score)}`}>
                    {analysis.score}
                  </div>
                  <p className="font-sans text-sm text-cream/50 uppercase tracking-wider mt-1">Investment Score</p>
                  <p className="font-serif text-lg text-gold mt-2 italic">{analysis.verdict}</p>
                </div>

                <div className="h-px bg-gold/10" />

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-charcoal/50 rounded-lg p-4 text-center">
                    <TrendingUp className="w-5 h-5 text-gold mx-auto mb-2" />
                    <p className="font-sans text-xs text-cream/50 uppercase">Annual Appreciation</p>
                    <p className="font-sans font-bold text-cream text-lg">{analysis.appreciation}</p>
                  </div>
                  <div className="bg-charcoal/50 rounded-lg p-4 text-center">
                    <TrendingUp className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                    <p className="font-sans text-xs text-cream/50 uppercase">5-Year ROI</p>
                    <p className="font-sans font-bold text-cream text-lg">{analysis.roi_5year}</p>
                  </div>
                </div>

                {/* Strengths */}
                <div>
                  <h4 className="font-sans text-sm text-cream/60 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-400" /> Strengths
                  </h4>
                  <div className="space-y-2">
                    {analysis.strengths.map((s, i) => (
                      <div key={i} className="flex items-start gap-2 text-cream/80 font-sans text-sm">
                        <span className="text-emerald-400 mt-0.5">✓</span> {s}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Risks */}
                <div>
                  <h4 className="font-sans text-sm text-cream/60 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" /> Risks
                  </h4>
                  <div className="space-y-2">
                    {analysis.risks.map((r, i) => (
                      <div key={i} className="flex items-start gap-2 text-cream/70 font-sans text-sm">
                        <span className="text-amber-400 mt-0.5">⚠</span> {r}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-gold/10" />

                {/* Recommendation */}
                <div className="bg-gold/10 rounded-lg p-4 border border-gold/20">
                  <p className="font-sans text-sm text-cream/80 leading-relaxed">{analysis.recommendation}</p>
                </div>

                <p className="font-sans text-xs text-cream/40 text-center">
                  {analysis.best_time}
                </p>
              </motion.div>
            ) : (
              <div className="bg-charcoal-light/50 backdrop-blur-sm border border-gold/10 rounded-2xl p-8 flex flex-col items-center justify-center h-full min-h-[400px]">
                <Brain className="w-20 h-20 text-gold/20 mb-6 animate-float" />
                <h3 className="font-serif text-xl text-cream/60 mb-2">AI Analysis Ready</h3>
                <p className="font-sans text-sm text-cream/40 text-center max-w-xs">
                  Enter your property details and click "Analyze Investment" to get AI-powered insights.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIAnalyzerSection;
