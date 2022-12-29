import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProd = useSelector((state) => {
    return state.cart;
  });

  const addFunc = (id) => {
    dispatch({ type: "add", payload: { id } });
    dispatch({ type: "calcPrice" });
  };
  const decFunc = (id) => {
    dispatch({ type: "dec", payload: id });
    dispatch({ type: "calcPrice" });
  };
  const removeFunc = (id) => {
    dispatch({ type: "remove", payload: id });
    dispatch({ type: "calcPrice" });
  };
  return (
    <section className="cart-cont">
      {cartProd.cartItems.length >= 1 ? (
        <div className="cart">
          {cartProd.cartItems.map((prod) => {
            return (
              <div key={prod.id} className="cart-card">
                <img src={prod.image} alt="product" />
                <div className="prod-details">
                  <div className="details">
                    <h3>{prod.title}</h3>
                    <p>${prod.price}</p>
                  </div>
                  <div className="incdec">
                    <button
                      onClick={() => {
                        decFunc(prod.id);
                      }}
                    >
                      -
                    </button>
                    <p className="qnty">{prod.quantity + 1}</p>
                    <button
                      onClick={() => {
                        addFunc(prod.id);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      removeFunc(prod.id);
                    }}
                  >
                    x
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="noitems">No items in your cart</div>
      )}
      <div className="amount">
        <p className="subt">Subtotal: ${cartProd.subtotal}</p>
        <p className="ship">Shipping: ${cartProd.shipping}</p>
        <p className="tax">Tax: ${cartProd.tax}</p>
        <h3 className="total">Total: ${cartProd.total}</h3>
      </div>
    </section>
  );
};

export default Cart;
