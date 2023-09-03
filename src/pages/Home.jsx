import { useEffect, useState } from "react";
import axios from "axios";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";


function getProducts() {
  return axios.get("https://dummyjson.com/products");
}

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {})
      .then(() => setLoading(false));
  }, []);

  return loading ? (
    <LoaderComponent/>
  ) : (
    <ItemListContainer productsData={products} />
  );
};

export default Home;
