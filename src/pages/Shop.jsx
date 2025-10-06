import { useOutletContext } from "react-router";
import { CardControls } from "../components/CardControls";

function Shop() {
  const { searchedProduct, setCart } = useOutletContext();

  console.log("Shop component rendering");

  return (
    <>
      <h1>Welcome to the Shop Page</h1>

      <div className="card-container">
        {searchedProduct &&
          searchedProduct.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.images[0]} alt={product.title} />
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
