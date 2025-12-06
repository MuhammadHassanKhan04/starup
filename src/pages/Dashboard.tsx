import { Layout } from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { User, Mail, Sparkles, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const { user, logout, isLoading } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    if (isLoading) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full"></div>
                </div>
            </Layout>
        );
    }

    if (!user) {
        return (
            <Layout>
                <div className="min-h-[60vh] flex items-center justify-center flex-col gap-4">
                    <p className="text-xl">Please log in to view your dashboard.</p>
                    <Button onClick={() => navigate("/auth")}>Go to Login</Button>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="font-display text-4xl font-bold mb-2">
                                Welcome, <span className="neon-text">{user.name}</span>
                            </h1>
                            <p className="text-muted-foreground">
                                Manage your profile and talents here.
                            </p>
                        </div>
                        <Button variant="outline" onClick={handleLogout} className="gap-2">
                            <LogOut className="w-4 h-4" />
                            Sign Out
                        </Button>
                    </div>

                    {/* Profile Card */}
                    <div className="glass-card p-8 rounded-2xl mb-8 border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 flex items-start gap-6">
                            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center border-2 border-primary/20">
                                <User className="w-10 h-10 text-primary" />
                            </div>

                            <div className="flex-1 space-y-4">
                                <div>
                                    <h2 className="text-xl font-semibold mb-1">Profile Details</h2>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50">
                                            <User className="w-5 h-5 text-muted-foreground" />
                                            <div>
                                                <p className="text-xs text-muted-foreground">Full Name</p>
                                                <p className="font-medium">{user.name}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50">
                                            <Mail className="w-5 h-5 text-muted-foreground" />
                                            <div>
                                                <p className="text-xs text-muted-foreground">Email</p>
                                                <p className="font-medium">{user.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder for future content */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="glass-card p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors cursor-pointer group">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Sparkles className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Your Talents</h3>
                            <p className="text-sm text-muted-foreground">
                                You haven't showcased any talents yet. Start building your portfolio!
                            </p>
                        </div>

                        <div className="glass-card p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors cursor-pointer group">
                            <div className="w-12 h-12 rounded-lg bg-secondary/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <User className="w-6 h-6 text-foreground" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
                            <p className="text-sm text-muted-foreground">
                                Update your password, notifications preferences, and privacy settings.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Layout>
    );
};

export default Dashboard;
