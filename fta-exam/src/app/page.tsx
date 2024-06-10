import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Travel from "@/components/Travel";
import Image from "next/image";

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
    </div>
  );
}
