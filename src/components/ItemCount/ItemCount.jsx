import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

const ItemCount = (props) => {
  const [count, setCount] = useState(0);
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddProduct = () => {
    if (count < props.stock) {
      setCartItems(cartItems + 1);
      setCount(count + 1);
    }
  };

  const handleRemoveProduct = () => {
    if (count > 0) {
      setCartItems(cartItems - 1);
      setCount(count - 1);
    }
  };

  return (
    <div>
      <Button onClick={handleRemoveProduct} variant="outline-light">
        -
      </Button>{" "}
      <label style={{ margin: 10, fontSize: "1.5rem", fontWeight: "bold" }}>{count} </label>{" "}
      <Button onClick={handleAddProduct} variant="outline-light" disabled={count === props.stock}>
        +
      </Button>{" "}
    </div>
  );
};

export default ItemCount;