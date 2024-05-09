import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Signup from "./pages/signup";
import Login from "./components/login";
import Dropdown from "./components/dropdown";
import NotFound from "./pages/NotFound";
// PRODUCTS
import Product from "./pages/products/products";
import Shoes from "./pages/products/shoes";
import Electronics from "./pages/products/electronics";
import Bag from "./pages/products/bag";
import Clothes from "./pages/products/clothes";
import Jewelries from "./pages/products/jewelries";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />}>
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/products" element={<Product />}>
            <Route path="/products/shoes" element={<Shoes />} />
            <Route path="/products/electronics" element={<Electronics />} />
            <Route path="/products/bag" element={<Bag />} />
            <Route path="/products/clothes" element={<Clothes />} />
            <Route path="/products/jewelries" element={<Jewelries />} />
          </Route>
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
