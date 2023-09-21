import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "react-bootstrap";

const ItemCount = () => {
  const [count, setCount] = useState(0);
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddProduct = () => {
    setCartItems(cartItems + 1);
    setCount(count + 1);
  };

  const handleRemoveProduct = () => {
    setCartItems(cartItems - 1);
    setCount(count - 1);
  };

  return (
    <div>
      <Button onClick={handleRemoveProduct} variant="outline-dark">
        -
      </Button>{" "}
      <label>{count} </label>{" "}
      <Button onClick={handleAddProduct} variant="outline-dark">
        +
      </Button>{" "}
    </div>
  );
};

export default ItemCount;
