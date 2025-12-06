import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LayoutDashboard, PlusCircle, Briefcase, MessageSquare, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const sidebarItems = [
    {
        title: "Overview",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Submit Talent",
        href: "/dashboard/submit-talent",
        icon: PlusCircle,
    },
    {
        title: "My Talents",
        href: "/dashboard/my-talents",
        icon: Briefcase,
    },
    {
        title: "Messages",
        href: "/dashboard/messages",
        icon: MessageSquare,
    },
    {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
];

export function DashboardSidebarNav() {
    const location = useLocation();
    const { logout } = useAuth();

    return (
        <div className="flex h-full flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-6">
                <Link className="flex items-center gap-2 font-bold" to="/">
                    <span className="text-xl">Star<span className="text-primary">Up</span></span>
                </Link>
            </div>
            <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-4 text-sm font-medium">
                    {sidebarItems.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.href;
                        return (
                            <Link
                                key={index}
                                to={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                                    isActive
                                        ? "bg-secondary text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                <Icon className="h-4 w-4" />
                                {item.title}
                            </Link>
                        );
                    })}
                </nav>
            </div>
            <div className="mt-auto p-4 border-t">
                <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground hover:text-destructive" onClick={logout}>
                    <LogOut className="h-4 w-4" />
                    Sign Out
                </Button>
            </div>
        </div>
    );
}

export function DashboardSidebar() {
    return (
        <div className="hidden border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:block w-64 fixed h-full z-30">
            <DashboardSidebarNav />
        </div>
    );
}
