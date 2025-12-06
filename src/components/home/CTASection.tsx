import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-neon-purple/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Animated Border Card */}
          <div className="glass-card p-12 md:p-16 relative overflow-hidden">
            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-primary/50 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-primary/50 rounded-br-2xl" />
            
            {/* Floating Sparkles */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-8 right-12"
            >
              <Sparkles className="w-6 h-6 text-primary/50" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [360, 180, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-8 left-12"
            >
              <Sparkles className="w-5 h-5 text-neon-purple/50" />
            </motion.div>

            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to Shine?
              <br />
              <span className="neon-text">Join StarUp Today</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Don't let your talent go unnoticed. Create your profile, showcase your skills, 
              and connect with opportunities that match your passion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth?mode=signup">
                <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/explore">
                <Button variant="glass" size="xl" className="w-full sm:w-auto">
                  Explore First
                </Button>
              </Link>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Free forever • No credit card required • Join 50K+ creators
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
