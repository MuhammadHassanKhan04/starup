import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Target, Users, Lightbulb, Globe, Award, Heart, Zap, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're on a mission to democratize talent discovery and give everyone a platform to shine.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Our community of creators is at the heart of everything we do. We grow together.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries to create the best possible experience for our users.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate about helping people share their unique abilities with the world.",
  },
];

const stats = [
  { value: "50K+", label: "Active Creators" },
  { value: "120+", label: "Countries Represented" },
  { value: "1M+", label: "Connections Made" },
  { value: "500K+", label: "Talents Showcased" },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Former tech executive with a passion for empowering creators.",
  },
  {
    name: "Marcus Johnson",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Full-stack engineer building the future of talent discovery.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Community",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Community builder dedicated to creator success.",
  },
  {
    name: "David Kim",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Award-winning designer crafting beautiful experiences.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About StarUp</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Empowering <span className="neon-text">Talent</span> Worldwide
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              StarUp was born from a simple belief: everyone has unique talents worth sharing.
              We created a platform where creators from every field can showcase their abilities,
              connect with opportunities, and build their personal brand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We believe that talent knows no boundaries. Whether you're a coder in Cairo,
                a dancer in Delhi, or a chef in Chicago, your skills deserve recognition.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                StarUp bridges the gap between talented individuals and the opportunities they deserve.
                We're building a global community where passion meets purpose, and where every creator
                can find their spotlight.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-primary">
                  <Zap className="w-5 h-5" />
                  <span className="font-medium">Fast Discovery</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">Secure Platform</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Quality Focus</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-card p-6 text-center hover-lift"
                >
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Our <span className="neon-text">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at StarUp
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="glass-card p-8 text-center h-full hover-lift">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The passionate people behind StarUp
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="glass-card overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-display text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
