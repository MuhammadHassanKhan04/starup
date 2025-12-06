import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Share2, MessageCircle, ArrowLeft, Mail } from "lucide-react";
import { motion } from "framer-motion";

const TalentDetails = () => {
    const { id } = useParams();
    const [talent, setTalent] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/talents/${id}`)
            .then(res => res.json())
            .then(data => {
                setTalent(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full"></div>
                </div>
            </Layout>
        );
    }

    if (!talent) {
        return (
            <Layout>
                <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                    <h1 className="text-2xl font-bold">Talent Not Found</h1>
                    <Link to="/explore">
                        <Button>Back to Explore</Button>
                    </Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="pt-24 pb-12 container mx-auto px-4">
                <Link to="/explore">
                    <Button variant="ghost" className="mb-6 gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Explore
                    </Button>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Image & Quick Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-1 space-y-6"
                    >
                        <div className="rounded-2xl overflow-hidden glass-card p-2">
                            <img
                                src={talent.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"}
                                alt={talent.title}
                                className="w-full aspect-[3/4] object-cover rounded-xl"
                            />
                        </div>

                        <div className="glass-card p-6 space-y-4">
                            <h3 className="font-semibold text-lg">Contact Info</h3>
                            <Button className="w-full gap-2">
                                <MessageCircle className="w-4 h-4" />
                                Message
                            </Button>
                            <Button variant="outline" className="w-full gap-2">
                                <Mail className="w-4 h-4" />
                                Email Me
                            </Button>
                            <Button variant="ghost" className="w-full gap-2">
                                <Share2 className="w-4 h-4" />
                                Share Profile
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column - Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div>
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-3 inline-block">
                                        {talent.category}
                                    </span>
                                    <h1 className="text-4xl font-display font-bold mb-2">{talent.title}</h1>
                                    <div className="flex items-center gap-4 text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {talent.location}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                            {talent.rating} (12 reviews)
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card p-8">
                                <h2 className="text-xl font-bold mb-4">About</h2>
                                <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                    {talent.description}
                                </p>
                            </div>
                        </div>

                        {talent.skills && talent.skills.length > 0 && (
                            <div className="glass-card p-8">
                                <h2 className="text-xl font-bold mb-4">Skills & Expertise</h2>
                                <div className="flex flex-wrap gap-2">
                                    {talent.skills.map((skill: string, index: number) => (
                                        <div key={index} className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default TalentDetails;
