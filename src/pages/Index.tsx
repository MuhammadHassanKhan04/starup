import { Layout } from "@/components/layout/Layout";
import { HeroSection as Hero } from "@/components/home/HeroSection"; // Renamed for brevity
import { CategoriesSection as Features } from "@/components/home/CategoriesSection"; // Renamed for brevity
import { CTASection as CTA } from "@/components/home/CTASection"; // Renamed for brevity

export default function Index() {
  return (
    <Layout>
      <Hero />
      <Features />
      <CTA />
    </Layout>
  );
}
