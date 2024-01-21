"use client"

import About from "./components/About";
import Action from "./components/Action";
import Advice from "./components/Advice";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Services from "./components/Services";
import Showroom from "./components/Showroom";



export default function Home() {
  return (
    <main className="font-montserrat">
      <NavBar />
      <Showroom />
      <Products />
      <Services />
      <Advice />
      <About />
      <Action />
      <Footer />
    </main>
    
  );
}
