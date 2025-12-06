import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";

export default function Settings() {
    const { user } = useAuth();

    return (
        <DashboardLayout>
            <div className="max-w-2xl space-y-8">
                <div>
                    <h1 className="text-3xl font-display font-bold">Settings</h1>
                    <p className="text-muted-foreground">Manage your account preferences and profile.</p>
                </div>

                <div className="glass-card p-6 space-y-6">
                    <h2 className="text-xl font-semibold">Profile Information</h2>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label>Full Name</Label>
                            <Input defaultValue={user?.name || ''} className="bg-background/50" />
                        </div>
                        <div className="space-y-2">
                            <Label>Email Address</Label>
                            <Input defaultValue={user?.email || ''} disabled className="bg-background/50 opacity-50" />
                        </div>
                    </div>
                    <Button>Save Changes</Button>
                </div>

                <div className="glass-card p-6 space-y-6">
                    <h2 className="text-xl font-semibold">Security</h2>
                    <Button variant="outline">Change Password</Button>
                </div>
            </div>
        </DashboardLayout>
    );
}
