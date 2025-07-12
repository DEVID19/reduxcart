import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  calculateTotal,
} from "../app/cartSlice.js";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      <h1 className="font-bold text-3xl text-center mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-xl text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between border p-4 rounded shadow-sm gap-4"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:w-2/3">
                  <img
                    src={item.thumbnail || item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {item.description}
                    </p>
                    <p className="font-medium mt-1 text-blue-600">
                      ₹{item.price}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap sm:flex-nowrap">
                  <button
                    onClick={() => {
                      dispatch(decreaseQuantity({ id: item.id })),
                        dispatch(calculateTotal({ id: item.id }));
                    }}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => {
                      dispatch(increaseQuantity({ id: item.id })),
                        dispatch(calculateTotal({ id: item.id }));
                    }}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch(removeFromCart({ id: item.id })),
                        dispatch(calculateTotal({ id: item.id }));
                    }}
                    className="text-red-600 hover:underline text-sm ml-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right sm:text-right">
            <h4 className="text-2xl font-bold">
              Total: ₹{totalPrice.toFixed(2)}
            </h4>
            <p className="text-sm text-gray-500">Items: {totalQuantity}</p>
            <button className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
