import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Search, Filter, Star, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = [
  "All",
  "Tech",
  "Music",
  "Art",
  "Cooking",
  "Fitness",
  "Gaming",
  "Education",
  "Photography",
  "Business",
];

const Explore = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [talents, setTalents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/talents')
      .then(res => res.json())
      .then(data => {
        setTalents(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredTalents = talents.filter((talent) => {
    const matchesSearch =
      talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talent.bio.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || talent.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Explore <span className="neon-text">Talents</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover incredible creators from around the world across various fields
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search talents by name, skill, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 h-14 text-lg bg-muted/50 border-border focus:border-primary"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-12 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-display tracking-wider transition-all duration-300 ${selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Results Count */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-muted-foreground">
              Showing <span className="text-primary font-semibold">{filteredTalents.length}</span> talents
            </p>
            <Button variant="ghost" size="sm" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* Talents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTalents.map((talent, index) => (
              <motion.div
                key={talent._id || talent.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div
                  className="glass-card overflow-hidden group cursor-pointer"
                  onClick={() => navigate(`/talent/${talent._id || talent.id}`)}
                >
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

          {/* No Results */}
          {filteredTalents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg">
                No talents found matching your criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Explore;
