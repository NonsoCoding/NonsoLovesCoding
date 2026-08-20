import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyTools from "@/components/MyTools";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <MyTools />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
