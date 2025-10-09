import { useOutletContext } from "react-router";
import "../styles/Cart.css";

function Cart() {
  const { cart, setCart } = useOutletContext();
  console.log("Cart component rendering with items:", cart);

  const totalAmount = cart?.reduce((acc, item) => acc + item.total, 0) || 0;

  const handleChange = (item, newQty) => {
    // const numValue = newQty === "" ? 1 : parseInt(newQty, 10);
    const validQty = Math.max(0, Math.min(999, newQty));

    console.log("Change quantity to:", validQty);

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
              // total: Number((validQty * cartItem.price).toFixed(2)),
            }
          : cartItem
      );
    });
  };

  return (
    <>
      <h1>Cart</h1>
      <p>You can choose your payment and delivery preferences at checkout</p>

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
                    {/* TODO: add quantity selector here, shares same class as in Shop */}
                    <div className="qty-controls">
                      <button type="button" onClick={() => handleChange(item, item.quantity - 1)}>
                        -
                      </button>
                      <input
                        type="number"
                        // min={INIT_QTY}
                        max={999}
                        value={item.quantity}
                        onChange={(e) => handleChange(item, e.target.value)}
                      />
                      <button type="button" onClick={() => handleChange(item, item.quantity + 1)}>
                        +
                      </button>
                    </div>

                    <p>Quantity: {item.quantity}</p>
                    <p>Total: ${item.total.toFixed(2)}</p>
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
          <button>Checkout</button>
        </div>
      </div>
    </>
  );
}

export { Cart };
