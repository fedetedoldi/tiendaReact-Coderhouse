import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
