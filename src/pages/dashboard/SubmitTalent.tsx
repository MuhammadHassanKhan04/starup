import { useState } from 'react';
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Upload, Sparkles } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function SubmitTalent() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        description: ''
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            if (!user) {
                toast.error("You must be logged in to submit talent");
                return;
            }

            const formDataToSend = new FormData();
            formDataToSend.append('userId', (user as any).id || (user as any)._id); // Handle both id formats
            formDataToSend.append('title', formData.title);
            formDataToSend.append('category', formData.category);
            formDataToSend.append('description', formData.description);
            if (selectedFile) {
                formDataToSend.append('image', selectedFile);
            }

            const res = await fetch('/api/talents', {
                method: 'POST',
                // Remove Content-Type header to let browser set boundary for FormData
                body: formDataToSend
            });

            if (res.ok) {
                toast.success("Talent submitted successfully!");
                navigate('/explore');
            } else {
                toast.error("Failed to submit talent");
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred");
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <DashboardLayout>
            <div className="max-w-2xl mx-auto space-y-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-display font-bold">Show Your Talent</h1>
                    <p className="text-muted-foreground">Share your skills with the world. Fill out the form below to get started.</p>
                </div>

                <Card className="glass-card border-white/10">
                    <CardHeader>
                        <CardTitle>Talent Details</CardTitle>
                        <CardDescription>Provide information about what you do best.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Talent Title</Label>
                            <Input
                                id="title"
                                placeholder="e.g. Professional Guitarist, UI/UX Designer"
                                className="bg-background/50"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <select
                                id="category"
                                className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            >
                                <option value="">Select a category</option>
                                <option value="Music">Music</option>
                                <option value="Art">Art & Design</option>
                                <option value="Tech">Technology</option>
                                <option value="Performance">Performance</option>
                                <option value="Cooking">Cooking</option>
                                <option value="Fitness">Fitness</option>
                                <option value="Gaming">Gaming</option>
                                <option value="Education">Education</option>
                                <option value="Photography">Photography</option>
                                <option value="Business">Business</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                placeholder="Tell us more about your talent, experience, and what makes you unique..."
                                className="min-h-[150px] bg-background/50"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Media</Label>
                            <div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center hover:bg-white/5 transition-colors cursor-pointer relative">
                                <input
                                    type="file"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                />
                                <div className="flex flex-col items-center gap-2">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                                        <Upload className="w-6 h-6" />
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-medium text-primary">Click to upload</span> or drag and drop
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        {selectedFile ? selectedFile.name : "Images or Videos (max 50MB)"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Button className="w-full gap-2" size="lg" onClick={handleSubmit} disabled={isLoading}>
                            <Sparkles className="w-4 h-4" />
                            {isLoading ? "Submitting..." : "Submit Talent"}
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}
