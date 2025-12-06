import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[80px]"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-neon-purple/10 blur-[100px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10 px-4"
      >
        {/* 404 Number */}
        <h1 className="font-display text-[150px] md:text-[200px] font-bold leading-none neon-text">
          404
        </h1>
        
        <h2 className="font-display text-2xl md:text-4xl font-bold mb-4 -mt-4">
          Page Not Found
        </h2>
        
        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
          Oops! The page you're looking for seems to have wandered off into the digital void.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="default" size="lg" className="gap-2">
              <Home className="w-4 h-4" />
              Go Home
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
