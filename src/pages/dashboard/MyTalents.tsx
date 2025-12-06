import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Plus, ExternalLink } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function MyTalents() {
    const { user } = useAuth();
    const [talents, setTalents] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            // In a real app we would have an endpoint filter by user, 
            // but for now we'll fetch all and filter client side 
            // or we could add a query param to the API.
            // Be efficient: Let's assume we filter on client for this speed run 
            // unless we want to fix the API too. 
            // Actually, let's just fetch all and filter.
            fetch('/api/talents')
                .then(res => res.json())
                .then(data => {
                    // Filter for current user
                    // Note: In a real app, do this on backend!
                    const myTalents = data.filter((t: any) => t.user === (user as any).id);
                    setTalents(myTalents);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [user]);

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-display font-bold">My Talents</h1>
                        <p className="text-muted-foreground">Manage the talents you are showcasing.</p>
                    </div>
                    <Link to="/dashboard/submit-talent">
                        <Button className="gap-2">
                            <Plus className="w-4 h-4" />
                            Add New Talent
                        </Button>
                    </Link>
                </div>

                {loading ? (
                    <div>Loading...</div>
                ) : talents.length === 0 ? (
                    <div className="glass-card p-12 text-center rounded-xl border border-dashed border-white/10">
                        <h3 className="text-xl font-semibold mb-2">No Talents Yet</h3>
                        <p className="text-muted-foreground mb-6">You haven't submitted any talents yet.</p>
                        <Link to="/dashboard/submit-talent">
                            <Button>Show Your Talent</Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {talents.map((talent) => (
                            <div key={talent._id} className="glass-card p-6 rounded-xl flex items-center gap-6">
                                <img
                                    src={talent.image}
                                    alt={talent.title}
                                    className="w-24 h-24 rounded-lg object-cover"
                                />
                                <div className="flex-1">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold mb-1">{talent.title}</h3>
                                            <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium">
                                                {talent.category}
                                            </span>
                                        </div>
                                        <div className="flex gap-2">
                                            <Link to={`/talent/${talent._id}`}>
                                                <Button variant="ghost" size="icon">
                                                    <ExternalLink className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                            <Button variant="ghost" size="icon">
                                                <Edit className="w-4 h-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground text-sm mt-3 line-clamp-2">
                                        {talent.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}
