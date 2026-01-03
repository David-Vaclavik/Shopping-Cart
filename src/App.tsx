import "./styles/App.css";
import "./styles/Variables.css";
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useFetchProducts } from "./hooks/useFetchProducts";

function App() {
  const { data } = useFetchProducts();
  // this controls the searchBar input value - lifted state from SearchBar used also in Shop
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Prefetch and cache images when on home page and data is loaded
  useEffect(() => {
    if (location.pathname === "/" && data?.products) {
      data.products.slice(0, 12).forEach((product) => {
        const link = document.createElement("link");
        link.rel = "prefetch";
        link.as = "image";
        link.href = product.images[0];
        document.head.appendChild(link);
      });
    }
  }, [location.pathname, data]);

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} data={data} />
      <main>
        <Outlet context={{ setSearchTerm, data, cart, setCart }} />
      </main>
      <Footer />
    </>
  );
}

export default App;
