import MainLayout from "./Layout/MainLayout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <MainLayout>
      <ItemListContainer greeting="Bienvenidos a mi tienda Online." />
    </MainLayout>
  );
};

export default App;
