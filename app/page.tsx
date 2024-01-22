"use client"

import { useEffect, useState } from "react";
import About from "./components/About";
import Action from "./components/Action";
import Advice from "./components/Advice";
import CartComponent from "./components/CartComponent";
import FavoriteComponent from "./components/FavoriteComponent";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Services from "./components/Services";
import Showroom from "./components/Showroom";
import { useFavoriteStore } from "./store/FavoriteStore";
import { useCartStore } from "./store/cartStore";
import { motion } from "framer-motion";



export default function Home() {
  const {showCart} = useCartStore()
  const {showFavorite} = useFavoriteStore()
  
  const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

  return (
    <main className="font-montserrat relative flex justify-center">
      <div className={showCart || showFavorite ? "opacity-20" : "w-full"}>
        <NavBar />
        <Showroom />
        <Products />
        <Services />
        <Advice />
        <About />
        <Action />
        <Footer />
      </div>
      {showCart && <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }} className={"absolute top-20"}>
            {isClient && <CartComponent />}
        </motion.div>}
      {showFavorite && <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }} className={"absolute top-20"}>
            {isClient && <FavoriteComponent />}
        </motion.div>}
    </main>
    
  );
}
