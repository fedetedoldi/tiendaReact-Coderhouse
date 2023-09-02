import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";
import styles from "./CartWidget.module.scss";
const CartWidget = () => {
  return (
    <div className={styles.cartContainer}>
      <FontAwesomeIcon icon={faCartShopping} />
      <Badge pill bg="light" text="dark">
        {" "}
        0{" "}
      </Badge>
    </div>
  );
};

export default CartWidget;
