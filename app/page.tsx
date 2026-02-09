import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/shared/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import Highlights from "@/components/home/Highlights";

import Sponsors from "@/components/home/Sponsors";
import CTA from "@/components/home/CTA";
import Footer from "@/components/shared/Footer";
import Loader from "@/components/shared/Loader";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-primary">
      <Loader />
      <Navbar />
      <Hero />
      <AboutPreview />
      <Highlights />

      <Sponsors />
      <CTA />
      <Footer />
    </main>
  );
}
