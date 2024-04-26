import "./ProductCard.css";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const ProductCard = ({ item }) => {
  const { id, title, brand, price, thumbnail } = item;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(id);

  return (
    <div className="card">
      <div className="image">
        <img alt="dummy" src={thumbnail} />
      </div>
      <div className="text">
        <div className="info">
          <h5>{brand}</h5>
          <h3>{title}</h3>
        </div>
        <div className="price">
          <h3>${price}</h3>
        </div>
        <div className="last_section">
          {productQuantity > 0 ? (
            <>
              <div className="qty">
                <FaMinus
                  style={{ cursor: "pointer" }}
                  onClick={() => cart.removeOneFromCart(id)}
                />
                <p>{productQuantity}</p>
                <FaPlus
                  style={{ cursor: "pointer" }}
                  onClick={() => cart.addOneToCart(id)}
                />
                <FaTrash
                  style={{ color: "white", cursor: "pointer" }}
                  onClick={() => cart.removeFromCart(id)}
                />
              </div>
            </>
          ) : (
            <button onClick={() => cart.addOneToCart(id)}>Add to cart</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
