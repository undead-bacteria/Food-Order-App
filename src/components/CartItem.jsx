import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCartItem,
  increaseCartItem,
} from "../store/actions/cartActions";

function CartItem({ title, id }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const itemCount = cartItems
    ? cartItems.find((item) => item.id === id)?.mealCount || 0
    : 0;

  const handleIncrease = () => {
    dispatch(increaseCartItem(id));
  };

  const handleDecrease = () => {
    dispatch(decreaseCartItem(id));
  };

  return (
    <div className="flex flex-row justify-between">
      <h2 className="font-bold pr-3">{title}</h2>
      <div className="flex flex-row justify-end gap-5">
        <button
          onClick={handleDecrease}
          className="rounded-full bg-black text-center text-white px-2 text-lg"
        >
          -
        </button>
        <h2>{itemCount}</h2>
        <button
          onClick={handleIncrease}
          className="rounded-full bg-black text-center text-white px-2 text-lg"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
