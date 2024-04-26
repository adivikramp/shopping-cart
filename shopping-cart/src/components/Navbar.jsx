import { BsCart } from "react-icons/bs";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import styled from "styled-components";
import CartProduct from "./CartProduct";
import "./Navbar.css";

const Overlay = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(52, 64, 84, 0.6);
  backdrop-filter: blur(8px);
  animation: fadein 0.5s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Modal = styled.div`
  overflow: auto;
  overflow-x: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  height: auto;
  min-height: 50vh;
  max-height: 80vh;
  background: white;
  border-radius: 30px;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1),
    0px 8px 8px -4px rgba(16, 24, 40, 0.04);
  transition: all 0.5s ease;
  z-index: 1;
`;

const CancelButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  top: 0px;
  right: 0px;
  border-radius: 100%;
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-size: 3rem;
  z-index: 100;
`;

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-item">
          <h1 className="heading">SHOPPING</h1>
        </div>
        <div className="nav-item">
          <BsCart className="cart" onClick={() => setShowModal(!showModal)} />
          <span className="item-count">{productsCount}</span>
        </div>
        {showModal && (
          <Overlay onClick={() => setShowModal(false)}>
            <Modal onClick={(e) => e.stopPropagation()}>
              {productsCount > 0 ? (
                <>
                  <div className="modal-container">
                    <div className="window">
                      <div className="order-info">
                        <div className="order-info-content">
                          <h2>Order Summary</h2>
                          <hr />
                          {cart.items.map((currentProduct, index) => (
                            <CartProduct key={index} items={currentProduct} />
                          ))}
                          <div className="total">
                            <span style={{ float: "left" }}>TOTAL</span>
                            <span
                              style={{ float: "right", textAlign: "right" }}
                            >
                              Total: ${cart.getTotalCost().toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="credit-info">
                        <div className="credit-info-content">
                          <button onClick={checkout} className="pay-btn">
                            Checkout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CancelButton onClick={() => setShowModal(false)}>
                    <IoArrowBackCircleSharp />
                  </CancelButton>
                </>
              ) : (
                <>
                  <h1 style={{ margin: "auto" }}>No products in your Cart</h1>
                  <CancelButton onClick={() => setShowModal(false)}>
                    <IoArrowBackCircleSharp style={{ color: "black" }} />
                  </CancelButton>
                </>
              )}
            </Modal>
          </Overlay>
        )}
      </div>
    </>
  );
};

export default Navbar;
