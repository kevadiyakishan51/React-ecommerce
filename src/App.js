import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import LoginSingUp from "./pages/LoginSingUp";
import Footer from "./components/footer/Footer";
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSingUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
