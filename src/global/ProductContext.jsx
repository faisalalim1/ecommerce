import { useState } from "react";
import { createContext } from "react";

import dslr from "../assests/dslr.jpg";
import headphones from "../assests/headphones.jpg";
import iphone from "../assests/iphone.jpg";
import blueyetti from "../assests/blueyetti.jpg";
import perfume from "../assests/perfume.jpg";
import rings from "../assests/rings.jpg";
import shoes from "../assests/shoes.jpg";
import watch from "../assests/watch.jpg";

export const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
  const [products] = useState([
    { id: 1, name: "Dslr", price: 300, image: dslr, status: "hot" },
    {id: 2,name: "Head Phones",price: 400,image: headphones,status: "new",},
    { id: 3, name: "Iphone", price: 600, image: iphone, status: "hot" },
    { id: 4, name: "Blue Yetti", price: 800, image: blueyetti, status: "new" },
    { id: 5, name: "Perfume", price: 900, image: perfume, status: "hot" },
    { id: 6, name: "Rings", price: 500, image: rings, status: "hot" },
    { id: 7, name: "Shoes", price: 950, image: shoes, status: "hot" },
    { id: 8, name: "Watch", price: 450, image: watch, status: "new" },
  ]);
  return (
    <ProductsContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
