import styles from "../App.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";
const MainLayout = ({ children }) => {
  return (
    <div className={styles.appContainer}>
      <main>{children}</main>
      <footer className={styles.footerContainer}>
        2023 © Todos los derechos reservados
      </footer>
    </div>
  );
};

export default MainLayout;
