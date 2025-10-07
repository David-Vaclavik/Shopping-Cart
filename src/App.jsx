import "./styles/App.css";
import "./styles/Variables.css";
import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { Header } from "./components/Header";

function App() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedProduct, setSearchedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  //TODO: increase limit once project is complete
  // Limit to 20 products for faster load during development, 0 is unlimited
  const LIMIT = 20;

  useEffect(() => {
    // fetch(`https://dummyjson.com/products`)
    fetch(`https://dummyjson.com/products?limit=${LIMIT}&sortBy=title&order=asc`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Failed to fetch products:", error);
        // Optionally set some fallback data or error state
      });
  }, []);

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
    </>
  );
}

export default App;
