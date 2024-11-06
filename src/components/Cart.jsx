import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartModal } from "../store/actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cart.count);

  const handleToggleCartModal = () => {
    dispatch(toggleCartModal());
  };

  return (
    <div>
      <button
        onClick={handleToggleCartModal}
        className="text-yellow-500 text-xl font-bold"
      >
        Cart ({count})
      </button>
    </div>
  );
};

export default Cart;
