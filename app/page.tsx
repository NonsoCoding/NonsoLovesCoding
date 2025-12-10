import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyTools from "@/components/MyTools";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <MyTools />
      <Projects />
      <Footer />
    </div>
  );
}
