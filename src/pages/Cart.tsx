import { useOutletContext } from "react-router";
import "../styles/Cart.css";
import type { CartItem, OutletContext } from "../types";

function Cart() {
  const { cart, setCart } = useOutletContext<OutletContext>();
  // console.log("Cart component rendering with items:", cart);

  const totalAmount = cart?.reduce((acc, item) => acc + item.total, 0) || 0;

  const handleChange = (item: CartItem, newQty: string | number) => {
    const numQty = typeof newQty === "number" ? newQty : parseInt(newQty, 10);
    const validQty = Math.max(0, Math.min(999, numQty));
    // console.log(cart);

    setCart((prevCart) => {
      // Remove item if quantity < 1
      if (validQty < 1) {
        return prevCart.filter((cartItem) => cartItem.id !== item.id);
      }

      // Update quantity
      return prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              quantity: validQty,
              total: validQty * cartItem.price,
            }
          : cartItem
      );
    });
  };

  //! This whole component needs to be purged... into smaller components
  return (
    <>
      <h1>Cart</h1>
      <p className="main-description">
        You can choose your payment and delivery preferences at checkout
      </p>

      <div className="cart-container">
        {cart.length > 0 ? (
          <div className="cart-items">
            {cart?.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <div className="cart-item-total">
                    {/* quantity selector here, shares same class as in Shop */}
                    <div className="qty-controls">
                      <button type="button" onClick={() => handleChange(item, item.quantity - 1)}>
                        -
                      </button>
                      <input
                        type="number"
                        max={999}
                        value={item.quantity}
                        onChange={(e) => handleChange(item, e.target.value)}
                      />
                      <button type="button" onClick={() => handleChange(item, item.quantity + 1)}>
                        +
                      </button>
                    </div>

                    <h4>Total: ${item.total.toFixed(2)}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="summary">
          <h2>Order Summmary</h2>
          <hr />
          <div className="subtotal">
            <p>Subtotal</p>
            <span>{totalAmount.toFixed(2)}</span>
          </div>
          <div className="shipping">
            <p>Shipping</p>
            <span>Free</span>
          </div>
          <hr />
          <div className="total">
            <h3>Total</h3>
            <h3>{totalAmount.toFixed(2)}</h3>
          </div>
          <button onClick={() => alert("Live demo ends here")}>Checkout</button>
        </div>
      </div>
    </>
  );
}

export { Cart };
