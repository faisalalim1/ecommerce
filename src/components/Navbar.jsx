import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../global/CartContext";
// import { Cart } from "./cart";

export const Navbar = () => {
  const {qty} = useContext(CartContext)
  return (
    <nav>
      <ul className="left">
        <li>
          <Link to="/">GoShop</Link>
        </li>
      </ul>
      <ul className="right">
        <li>
          <Link to="cart">
            <span className="shoppingCart"><i class="fa-solid fa-cart-plus"></i></span>
            <span className="cartCount">{qty}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
