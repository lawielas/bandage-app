"use client"

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



export default function Home() {

  const {showCart} = useCartStore()
  const {showFavorite} = useFavoriteStore()

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
      <div className={showCart ? "absolute top-20" : "hidden"}>
        <CartComponent />
      </div>
      <div className={showFavorite ? "absolute top-20" : "hidden"}>
        <FavoriteComponent />
      </div>
    </main>
    
  );
}
