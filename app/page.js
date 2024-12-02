"use client"
import About from "./components/About";
import CreateWork from "./components/CreateWork";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import WhatIDo from "./components/WhatIDo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div  >
        <Navbar/>
        <Hero/>
        <About/>
        <WhatIDo/>
        <Skills/>
        <CreateWork/>
        <Contact/>
        <Footer/>
    </div>
  );
}
