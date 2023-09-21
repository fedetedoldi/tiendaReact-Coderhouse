import MainLayout from "./Layout/MainLayout";
import { CartProvider } from "./context/CartContext";
import MainRouter from "./routes/MainRouter";

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
