import { useOutletContext } from "react-router";
import "../styles/Cart.css";

function Cart() {
  const { cart } = useOutletContext();
  console.log("Cart component rendering with items:", cart);

  const totalAmount = cart.reduce((acc, item) => acc + item.total, 0);

  return (
    <>
      <h1>Cart</h1>
      <p>You can choose your payment and delivery preferences at checkout</p>

      <div className="cart-container">
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.total.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

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
          <button>Checkout</button>
        </div>
      </div>
    </>
  );
}

export { Cart };
