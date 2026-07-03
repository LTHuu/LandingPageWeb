'use client'
import NavBar from "../component/NavBar";
import HeroSection from "@/component/HeroSection";
import Feature from "@/component/Feature";
import ProbAndSol from "@/component/ProbAndSol";
import FAQ from "@/component/FAQ";
import { useEffect, useState } from "react";
import Footer from "@/component/Footer";
import Sepcification from "@/component/Specification";


export default function Home() {
  
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const threshold = 10;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;

      if (diff > threshold) {
        setShowHeader(false);
      }
      else if (diff < -threshold) {
        setShowHeader(true);
      }

      // luôn update
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={showHeader? "header show": "header hide"}>
        <NavBar />
      </header>
      <section id="home">
        <HeroSection />
      </section> 
      <section id="feature">
        <Feature/>
      </section>
      <section id="specifi">
        <Sepcification/>
      </section>
      <section id="problem">
        <ProbAndSol/>
      </section>
      <section id="faq">
        <FAQ/>
      </section>
      <section id="contact">
        <Footer/>
      </section>
    </>
  );
}
