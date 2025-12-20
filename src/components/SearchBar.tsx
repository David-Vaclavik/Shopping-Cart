// import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import type { SearchBarProps } from "../types";

function SearchBar({ setSearchedProduct, searchTerm, setSearchTerm, data }: SearchBarProps) {
  //TODO: searchTerm state why is it lifted? investigate later
  // const [searchTerm, setSearchTerm] = useState("");
  // console.log(data);
  const navigate = useNavigate();

  // Filter products based on search term
  const filteredProducts =
    data?.products.filter((product) =>
      product.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    ) || [];

  // Limit suggestions to first 5 matches
  const filteredProductsLimited = filteredProducts.slice(0, 5);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);

    console.log(filteredProducts);
    setSearchedProduct(filteredProducts);

    // Clears input and state
    // setSearchTerm(""); //? Should we clear the search term?

    // Navigate to shop page
    //TODO: if in shop page already, don't navigate again
    navigate("/shop");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"> </label>
        <input
          list="suggestions"
          id="search"
          name="search"
          autoComplete="off"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <datalist id="suggestions">
          {filteredProductsLimited.map((product) => (
            <option key={product.id} value={product.title} />
          ))}
        </datalist>

        <button type="submit">Search</button>
      </form>
    </>
  );
}

export { SearchBar };
