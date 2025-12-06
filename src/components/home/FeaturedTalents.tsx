import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredTalents = [
  {
    id: 1,
    name: "Alex Chen",
    title: "Full-Stack Developer",
    category: "Tech",
    location: "San Francisco, CA",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    skills: ["React", "Node.js", "AI/ML"],
    bio: "Building innovative web solutions with modern technologies.",
  },
  {
    id: 2,
    name: "Maya Johnson",
    title: "Digital Artist",
    category: "Art",
    location: "New York, NY",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    skills: ["Digital Art", "3D Design", "Animation"],
    bio: "Creating immersive digital experiences and visual stories.",
  },
  {
    id: 3,
    name: "Jordan Williams",
    title: "Music Producer",
    category: "Music",
    location: "Los Angeles, CA",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
    skills: ["Production", "Mixing", "Sound Design"],
    bio: "Crafting unique sounds that move people.",
  },
  {
    id: 4,
    name: "Sarah Kim",
    title: "Fitness Coach",
    category: "Fitness",
    location: "Miami, FL",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    skills: ["HIIT", "Yoga", "Nutrition"],
    bio: "Transforming lives through personalized fitness programs.",
  },
  {
    id: 5,
    name: "David Park",
    title: "Chef & Food Creator",
    category: "Cooking",
    location: "Chicago, IL",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    skills: ["Korean Cuisine", "Fusion", "Food Styling"],
    bio: "Blending cultures through innovative culinary creations.",
  },
  {
    id: 6,
    name: "Emma Davis",
    title: "Game Developer",
    category: "Gaming",
    location: "Seattle, WA",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    skills: ["Unity", "Unreal", "Game Design"],
    bio: "Creating immersive gaming experiences for all platforms.",
  },
];

export function FeaturedTalents() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4"
        >
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="neon-text">Talents</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Discover exceptional creators making waves in their fields
            </p>
          </div>
          <Link to="/explore">
            <Button variant="outline" className="group">
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Talents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTalents.map((talent, index) => (
            <motion.div
              key={talent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card overflow-hidden group cursor-pointer">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={talent.image}
                    alt={talent.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-xs font-display tracking-wider">
                      {talent.category}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-medium">{talent.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {talent.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {talent.title}
                  </p>
                  
                  <div className="flex items-center gap-1 text-muted-foreground text-xs mb-4">
                    <MapPin className="w-3 h-3" />
                    {talent.location}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {talent.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {talent.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Profile Link */}
                  <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                    View Profile
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
