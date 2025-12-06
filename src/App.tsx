import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import SubmitTalent from "./pages/dashboard/SubmitTalent";
import MyTalents from "./pages/dashboard/MyTalents";
import Messages from "./pages/dashboard/Messages";
import Settings from "./pages/dashboard/Settings";
import TalentDetails from "./pages/TalentDetails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Import AuthProvider
import { AuthProvider } from "@/context/AuthContext";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/submit-talent" element={<SubmitTalent />} />
            <Route path="/dashboard/my-talents" element={<MyTalents />} />
            <Route path="/dashboard/messages" element={<Messages />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/talent/:id" element={<TalentDetails />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
