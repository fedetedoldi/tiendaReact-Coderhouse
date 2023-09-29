import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import NavBar from "../components/NavBar/NavBar";
import ItemDetails from "../pages/ItemDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";

const MainRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/item/:itemId" element={<ItemDetails />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
