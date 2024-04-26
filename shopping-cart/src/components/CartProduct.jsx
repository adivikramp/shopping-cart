import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { getProductData } from "../data/products";
import "./CartProduct.css";
import { MdDelete } from "react-icons/md";

function CartProduct({ items }) {
  const cart = useContext(CartContext);
  const { id, quantity } = items;
  const productData = getProductData(id);

  return (
    <>
      <table className="order-table">
        <tbody>
          <tr>
            <td>
              <img
                alt="dummy"
                src={productData.thumbnail}
                className="full-width"
              />
            </td>
            <td>
              <br />
              <span className="thin">{productData.title}</span>
              <br />
              <span className="thin">{quantity} in Total</span>
              <br />{" "}
              <span className="modal-price">
                ${(quantity * productData.price).toFixed(2)}
              </span>
              <br />
              <button
                className="remove-btn"
                onClick={() => cart.removeFromCart(id)}
              >
                <MdDelete />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
    </>
  );
}

export default CartProduct;
