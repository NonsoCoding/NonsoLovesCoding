import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TechStack/>
      <Projects />
      <Footer />
    </div>
  );
}
