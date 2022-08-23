// import logo from './logo.svg';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Products } from "./components/Products";
import { ProductsContextProvider } from "./global/ProductContext";
import { CartContextProvider } from "./global/CartContext";
import { Cart } from "./components/cart";
import {NotFound} from "./components/NotFound"

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
        <Navbar></Navbar>
        <Banner></Banner>
        <Routes>
          <Route path="/" element={<Products></Products>} />
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
