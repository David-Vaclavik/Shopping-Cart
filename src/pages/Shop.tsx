import { useOutletContext, useSearchParams } from "react-router";
import { CardControls } from "../components/CardControls";
import "../styles/Shop.css";
import type { OutletContext } from "../types";
// import { useState } from "react";

function Shop() {
  const { setSearchTerm, data, setCart } = useOutletContext<OutletContext>();

  // const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("search") || "";

  // Filter by search query
  let productsToDisplay = data?.products;

  if (searchQuery) {
    productsToDisplay = productsToDisplay?.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Derive filtered products on each render
  const displayProducts =
    selectedCategory === "all"
      ? productsToDisplay
      : productsToDisplay?.filter((product) => product.category === selectedCategory);

  const handleClick = (category: string) => {
    // Clear search results when filtering by category
    setSearchTerm("");

    // Keep search query when filtering by category
    const newParams: Record<string, string> = {};

    if (category !== "all") {
      newParams.category = category;
    }

    // console.log(newParams);
    setSearchParams(newParams);
  };

  return (
    <>
      <h1>Our Collection</h1>
      <p className="main-description-shop">
        Experience innovation with our collection of cutting-edge electronics crafted for modern
        living.
      </p>

      {/* const categories = ["laptops", "smartphones", "mobile-accessories", "tablets"] */}
      <div className="category-select">
        {/* <button onClick={() => console.log(data?.products)}>Data clg</button> */}
        {/* <button onClick={() => console.log(searchQuery)}>Search Query</button> */}

        <button onClick={() => handleClick("all")}>All</button>
        <button onClick={() => handleClick("laptops")}>Laptops</button>
        <button onClick={() => handleClick("smartphones")}>Smartphones</button>
        <button onClick={() => handleClick("tablets")}>Tablets</button>
        <button onClick={() => handleClick("mobile-accessories")}>Mobile Accessories</button>
      </div>

      <div className="card-container">
        {displayProducts &&
          displayProducts.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.images[0]} alt={product.title} loading="lazy" />
              <div className="card-text">
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
              </div>

              <CardControls product={product} setCart={setCart} />
            </div>
          ))}
      </div>
    </>
  );
}

export { Shop };
