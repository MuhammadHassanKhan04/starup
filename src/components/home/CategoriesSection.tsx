import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Code, 
  Music, 
  Palette, 
  Utensils, 
  Dumbbell, 
  Gamepad2, 
  BookOpen, 
  Camera,
  Mic,
  Briefcase,
  Heart,
  Film
} from "lucide-react";

const categories = [
  { name: "Tech", icon: Code, color: "from-blue-500 to-cyan-500" },
  { name: "Music", icon: Music, color: "from-purple-500 to-pink-500" },
  { name: "Art", icon: Palette, color: "from-orange-500 to-red-500" },
  { name: "Cooking", icon: Utensils, color: "from-yellow-500 to-orange-500" },
  { name: "Fitness", icon: Dumbbell, color: "from-green-500 to-emerald-500" },
  { name: "Gaming", icon: Gamepad2, color: "from-violet-500 to-purple-500" },
  { name: "Education", icon: BookOpen, color: "from-sky-500 to-blue-500" },
  { name: "Photography", icon: Camera, color: "from-rose-500 to-pink-500" },
  { name: "Speaking", icon: Mic, color: "from-amber-500 to-yellow-500" },
  { name: "Business", icon: Briefcase, color: "from-slate-500 to-zinc-500" },
  { name: "Wellness", icon: Heart, color: "from-red-500 to-rose-500" },
  { name: "Film", icon: Film, color: "from-indigo-500 to-violet-500" },
];

export function CategoriesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
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
            Explore <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover talented individuals across diverse fields and industries
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                to={`/explore?category=${category.name.toLowerCase()}`}
                className="group block"
              >
                <div className="glass-card p-6 text-center hover-lift cursor-pointer">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-sm font-semibold tracking-wide text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
