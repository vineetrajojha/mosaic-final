import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/shared/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import Highlights from "@/components/home/Highlights";
import EventsPreview from "@/components/home/EventsPreview";
import Timeline from "@/components/home/Timeline";
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
      <EventsPreview />
      <Timeline />
      <Sponsors />
      <CTA />
      <Footer />
    </main>
  );
}
