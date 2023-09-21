import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";
import styles from "./CartWidget.module.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const CartWidget = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className={styles.cartContainer}>
      <FontAwesomeIcon icon={faCartShopping} />
      <Badge pill bg="light" text="dark">
        {cartItems}
      </Badge>
    </div>
  );
};

export default CartWidget;
