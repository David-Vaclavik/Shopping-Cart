import { useEffect, useState } from "react";

function SearchBar() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedProduct, setSearchedProduct] = useState(null);

  const LIMIT = 20;
  // https://dummyjson.com/products?limit=20&sortBy=title&order=asc

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${LIMIT}&sortBy=title&order=asc`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  // console.log(data);
  // console.log(data?.products);
  // console.log(data?.products[0].images);
  // console.log(data?.products[0].images[0]);

  //TODO: make below state, because there is nothing when going back to search
  // Filter products based on search term
  const filteredProducts =
    data?.products.filter((product) =>
      product.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    ) || [];

  // Limit suggestions to first 5 matches
  const filteredProductsLimited = filteredProducts.slice(0, 5);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);

    setSearchedProduct(filteredProducts);
    setSearchTerm(""); // Clears input and state
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

      {/* Display searched products */}
      <div className="card-container">
        {searchedProduct &&
          searchedProduct.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.images[0]} alt={product.title} />
              <div className="card-text">
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                {/* <p>{product.description}</p> */}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export { SearchBar };
