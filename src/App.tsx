import "./styles/App.css";
import "./styles/Variables.css";
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import type { Data, Product } from "./types";

function App() {
  const [data, setData] = useState<Data | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedProduct, setSearchedProduct] = useState<Product[] | null>(null);
  const [cart, setCart] = useState([]);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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

        // console.log(`Loaded ${allProducts.length} products`)
        // console.log(allProducts);
        setData({ products: allProducts });

        // Prefetch first 12 images if on home page for faster loading on shop page
        if (location.pathname === "/") {
          allProducts.slice(0, 12).forEach((product) => {
            const link = document.createElement("link");
            link.rel = "prefetch";
            link.as = "image";
            link.href = product.images[0];
            document.head.appendChild(link);
          });
        }
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      })
      .finally(() => {
        // console.log(data);
        console.log("Fetch attempt completed");
      });
  }, []);

  /*
  useEffect(() => {
    // fetch(`https://dummyjson.com/products`)
    // fetch(`https://dummyjson.com/products?limit=${LIMIT}&sortBy=title&order=asc`)
      `https://dummyjson.com/products/category/smartphones?limit=${LIMIT}&sortBy=title&order=asc`
  */

  return (
    <>
      <Header
        setSearchedProduct={setSearchedProduct}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        data={data}
      />
      <main>
        <Outlet context={{ searchedProduct, data, cart, setCart }} />
      </main>
      <Footer />
    </>
  );
}

export default App;
