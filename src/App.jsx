import "./styles/App.css";
import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { Header } from "./components/Header";

function App() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedProduct, setSearchedProduct] = useState(null);

  const LIMIT = 20;

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${LIMIT}&sortBy=title&order=asc`)
      .then((response) => response.json())
      .then((data) => setData(data));
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
        <Outlet context={{ searchedProduct, data }} />
      </main>
    </>
  );
}

export default App;
