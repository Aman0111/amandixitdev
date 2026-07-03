import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Navbar } from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-pearl text-ink">
      <div className="fixed inset-0 -z-20 bg-premium-radial" />
      <div className="fixed inset-0 -z-10 noise-mask" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
