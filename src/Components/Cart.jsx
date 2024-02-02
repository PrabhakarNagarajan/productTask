import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/action";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const value = useSelector((state) => state.cart);
  console.log(cart, value);
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="p-4 border border-gray-300 mb-4">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">${item.price}</p>
          <p className="text-gray-600">Quantity: {item.quantity}</p>
          <button
            className="mt-2 bg-red-500 text-white p-2 rounded"
            onClick={() => handleRemoveFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
