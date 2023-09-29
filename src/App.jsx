import { CartProvider } from "./context/CartContext";
import MainLayout from "./Layout/MainLayout";
import MainRouter from "./routes/MainRouter";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <CartProvider>
      <MainLayout>
        <MainRouter />
      </MainLayout>
    </CartProvider>
  );
};

export default App;
