import "./styles/App.css";
import "./styles/Variables.css";
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import type { Data } from "./types";

function App() {
  const [data, setData] = useState<Data | null>(null);
  // this controls the searchBar input value - lifted state from SearchBar used also in Shop
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Fetch products once on mount
  useEffect(() => {
    // Limit to 20 products for faster load during development, 0 is unlimited
    const LIMIT = 0;
    const categories = ["laptops", "smartphones", "mobile-accessories", "tablets"];

    Promise.all(
      categories.map((category) =>
        fetch(
          `https://dummyjson.com/products/category/${category}?limit=${LIMIT}&sortBy=title&order=asc`
        ).then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to fetch ${category}`);
          }
          return res.json();
        })
      )
    )
      .then((results) => {
        // console.log(results);
        const allProducts = results
          .flatMap((r) => r.products)
          .sort((a, b) => a.title.localeCompare(b.title));

        setData({ products: allProducts });
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      })
      .finally(() => {
        console.log("Fetch attempt completed");
      });
  }, []);

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
