import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MessageSquare } from "lucide-react";

export default function Messages() {
    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-display font-bold">Messages</h1>
                    <p className="text-muted-foreground">View your conversations with other users.</p>
                </div>

                <div className="glass-card p-12 text-center rounded-xl border border-dashed border-white/10">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <MessageSquare className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No Messages Yet</h3>
                    <p className="text-muted-foreground">
                        When people contact you about your talent, messages will appear here.
                    </p>
                </div>
            </div>
        </DashboardLayout>
    );
}
