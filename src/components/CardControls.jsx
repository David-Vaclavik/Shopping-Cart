import { useState, useEffect, useRef } from "react";

function CardControls({ product, setCart }) {
  const [quantity, setQuantity] = useState(0);
  const renderCount = useRef(0);

  // Debug: Track renders
  useEffect(() => {
    renderCount.current += 1;
  });

  // console.log(`CardControls for ${product.title} - Render #${renderCount.current}`);
  // End Debug

  const handleChange = (value) => {
    const numValue = value === "" ? 0 : parseInt(value, 10);
    setQuantity(Math.max(0, numValue)); // Never go below 0
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted with quantity:", quantity);
    // console.log(product);

    if (quantity > 0) {
      const quantityToAdd = quantity; // Capture the value

      setCart((prevCart) => {
        // Check if product already in cart
        const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
        console.log("Existing product index:", existingProductIndex);

        // If found, update quantity and total
        if (existingProductIndex !== -1) {
          const updatedCart = [...prevCart];
          const currentQty = prevCart[existingProductIndex].quantity;

          updatedCart[existingProductIndex] = {
            ...prevCart[existingProductIndex],
            quantity: currentQty + quantityToAdd,
            total: (currentQty + quantityToAdd) * product.price,
          };

          console.log("Updated cart:", updatedCart);
          return updatedCart;
        }

        // Add new product to cart
        const newCart = [
          ...prevCart,
          {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.images[0],
            // quantity: quantity,
            quantity: quantityToAdd,
            total: product.price * quantityToAdd,
          },
        ];

        console.log("New cart:", newCart);
        return newCart;
      });
    }

    setQuantity(0);
  };

  return (
    <form className="card-controls" onSubmit={handleSubmit}>
      <div className="qty-controls">
        <button type="button" onClick={() => handleChange(quantity - 1)}>
          -
        </button>

        <input
          type="number"
          min="0"
          value={quantity}
          onChange={(e) => handleChange(e.target.value)}
        />

        <button type="button" onClick={() => handleChange(quantity + 1)}>
          +
        </button>
      </div>

      <button className="add-to-cart" type="submit">
        Add to Cart
      </button>
    </form>
  );
}

export { CardControls };
