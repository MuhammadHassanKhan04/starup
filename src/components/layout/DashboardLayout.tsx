import { ReactNode } from "react";
import { DashboardSidebar, DashboardSidebarNav } from "@/components/dashboard/DashboardSidebar";
import { useAuth } from "@/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface DashboardLayoutProps {
    children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    const { user, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/auth" state={{ from: location }} replace />;
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Noise overlay */}
            <div className="noise-overlay" />

            <DashboardSidebar />

            {/* Mobile Header */}
            <header className="flex h-14 items-center gap-4 border-b bg-background/95 backdrop-blur px-6 md:hidden sticky top-0 z-40">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-0 w-64 bg-background border-r">
                        <DashboardSidebarNav />
                    </SheetContent>
                </Sheet>
                <span className="font-bold">StarUp</span>
            </header>

            <main className="md:pl-64 min-h-screen pt-4 md:pt-0">
                <div className="container p-4 md:p-8 max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
