import React from "react";
import styles from "../App.module.scss";
import NavBar from "../components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.appContainer}>
      <header className={styles.navContainer}>
        <NavBar />
      </header>
      <main>{children}</main>
      <footer className={styles.footerContainer}>
        2023 © Todos los derechos reservados
      </footer>
    </div>
  );
};

export default MainLayout;
