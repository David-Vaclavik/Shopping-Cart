import { useOutletContext } from "react-router";
import { CardControls } from "../components/CardControls";
import "../styles/Shop.css";

function Shop() {
  const { searchedProduct, data, setCart } = useOutletContext();

  // Show searchedProduct if it exists, otherwise show all products from data
  const productsToDisplay = searchedProduct || data?.products;

  // TODO: Add filtering options for categories

  return (
    <>
      <h1>Our Collection</h1>
      <p className="main-description">
        Experience innovation with our collection of cutting-edge electronics crafted for modern
        living.
      </p>

      {/* TODO: Add filtering options for categories */}

      <div className="card-container">
        {productsToDisplay &&
          productsToDisplay.map((product) => (
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
