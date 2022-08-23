import { useContext } from "react";
import { ProductsContext } from "../global/ProductContext";
import { CartContext } from "../global/CartContext";

export const Products = () => {
  const { products } = useContext(ProductsContext);
  const {dispatch,} = useContext(CartContext)

//   console.log(data)
  return (
    <div className="container">
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="cover">
              <div className="product-img">
                <img src={product.image} alt="not found" className="im"></img>
              </div>
              <div className="product-details">
                <div className="product-name">{product.name}</div>
                <div className="product-price">$ {product.price}.00</div>
                <div className="add-to-cart" onClick={()=>dispatch({type:'ADD_TO_CART',id:product.id,product})}>Add to cart</div>
                {product.status === "hot" ? <div className="hot">Hot</div> : ""}
                {product.status === "new" ? <div className="new">New</div> : ""}
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
