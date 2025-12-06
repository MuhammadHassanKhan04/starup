import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Torres",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    content: "StarUp completely transformed my career. Within months, I connected with amazing clients and landed my dream projects. The platform's visibility is unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "Lisa Anderson",
    role: "Music Producer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    content: "As an independent artist, getting discovered was always a challenge. StarUp changed that. My music now reaches audiences I never thought possible.",
    rating: 5,
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Fitness Coach",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop",
    content: "The community here is incredibly supportive. I've grown my client base by 300% and connected with other professionals in the wellness space.",
    rating: 5,
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Full-Stack Developer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    content: "StarUp's talent discovery algorithm is brilliant. I was approached by a tech startup within a week of creating my profile. Highly recommend!",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-neon-purple/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            What Creators <span className="neon-text">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of satisfied creators who found their spotlight
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 md:p-12"
              >
                {/* Quote Icon */}
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
                    <Quote className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xl md:text-2xl text-center text-foreground leading-relaxed mb-8">
                  "{testimonials[current].content}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/50"
                  />
                  <div className="text-left">
                    <div className="font-display font-bold text-foreground">
                      {testimonials[current].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[current].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full bg-muted/50 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full bg-muted/50 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoPlay(false);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-primary w-8 shadow-[0_0_10px_hsl(var(--primary))]"
                    : "bg-muted hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
