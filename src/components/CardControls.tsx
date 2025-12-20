import { useState } from "react";
import type { OutletContext, Product } from "../types";

type CardControlsProps = {
  product: Product;
  // setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setCart: OutletContext["setCart"];
};

function CardControls({ product, setCart }: CardControlsProps) {
  const [quantity, setQuantity] = useState(1);

  const INIT_QTY = 1;
  const MAX_QTY = 999;

  // React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>
  const handleChange = (value: string | number) => {
    if (value === "") {
      setQuantity(INIT_QTY);
      return;
    }

    const numValue = typeof value === "number" ? value : parseInt(value, 10);
    setQuantity(Math.max(INIT_QTY, Math.min(MAX_QTY, numValue)));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("Form submitted with quantity:", quantity);
    // console.log(product);

    if (quantity > 0) {
      const quantityToAdd = quantity;

      setCart((prevCart) => {
        // Check if product already in cart
        const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);

        // If found, update quantity and total
        if (existingProductIndex !== -1) {
          const updatedCart = [...prevCart];
          const currentQty = prevCart[existingProductIndex].quantity;

          updatedCart[existingProductIndex] = {
            ...prevCart[existingProductIndex],
            quantity: currentQty + quantityToAdd,
            total: (currentQty + quantityToAdd) * product.price,
          };

          // console.log("Updated cart:", updatedCart);
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
            quantity: quantityToAdd,
            total: product.price * quantityToAdd,
          },
        ];

        // console.log("New cart:", newCart);
        return newCart;
      });
    }

    // TODO: I want it to represent amount in cart
    setQuantity(1); //! Reset quantity after adding to cart
  };

  return (
    <form className="card-controls" onSubmit={handleSubmit}>
      <div className="qty-controls">
        <button type="button" onClick={() => handleChange(quantity - 1)}>
          -
        </button>
        <input
          type="number"
          min={INIT_QTY}
          max={MAX_QTY}
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
