import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openFormModal, toggleCartModal } from "../store/actions/cartActions";
import Button from "./Button";
import CartItem from "./CartItem";

function CartModal() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.totalPrice),
    0
  );

  const handleToggleCartModal = () => {
    dispatch(toggleCartModal());
  };

  const handleOpenFormModal = () => {
    dispatch(openFormModal());
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex  justify-center items-center text-gray-800">
      <div className="bg-slate-50 w-1/2 flex flex-col p-6 gap-5">
        <div>
          <h2 className="font-bold text-xl">Your Cart</h2>
        </div>
        <div className="flex flex-col gap-2">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                title={cartItem.name}
                itemCount={cartItem.mealCount}
                id={cartItem.id}
              />
            ))
          )}
        </div>
        <div className="place-self-end">
          <h2 className="font-bold text-xl">${total.toFixed(2)}</h2>
        </div>
        <div className="flex flex-row justify-end gap-2">
          <Button handleClick={handleToggleCartModal}>Close</Button>
          <Button handleClick={handleOpenFormModal}>Checkout</Button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
