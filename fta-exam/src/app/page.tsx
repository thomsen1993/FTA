import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/Navbar";
import Travel from "@/components/sections/Travel";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Navbar />
      <main>
        <About />
        <Travel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
