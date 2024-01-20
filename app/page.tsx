import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Showroom from "./components/Showroom";


export default function Home() {
  return (
    <main className="font-montserrat">
      <NavBar />
      <Showroom />
      <Products />
    </main>
  );
}
