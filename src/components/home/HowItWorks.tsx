import { motion } from "framer-motion";
import { UserPlus, Edit3, Rocket, Trophy } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    description: "Sign up in seconds and join our community of talented individuals from around the world.",
    step: "01",
  },
  {
    icon: Edit3,
    title: "Build Your Profile",
    description: "Showcase your skills, add your portfolio, and tell your unique story to potential connections.",
    step: "02",
  },
  {
    icon: Rocket,
    title: "Submit Talents",
    description: "Add multiple talents, share your work, and get discovered by people who value your abilities.",
    step: "03",
  },
  {
    icon: Trophy,
    title: "Get Recognized",
    description: "Connect with opportunities, receive feedback, and grow your personal brand globally.",
    step: "04",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get started in minutes and begin showcasing your talents to the world
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[60%] w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="glass-card p-8 text-center relative group hover-lift">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 font-display text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
