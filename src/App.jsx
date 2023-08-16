import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import styles from "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <div className={styles.appContainer}>
      <nav className={styles.navContainer}>
        <NavBar />
      </nav>
      <main className={styles.mainContainer}>
        <ItemListContainer greeting="Bienvenidos a mi tienda online." />
      </main>
      <footer className={styles.footerContainer}>Footer</footer>
    </div>
  );
};

export default App;
