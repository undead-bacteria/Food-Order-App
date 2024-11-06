import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitOrder } from "../http";
import {
  closeFormModal,
  toggleSuccessModal,
} from "../store/actions/cartActions";
import Button from "./Button";

function FormModal() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = cartItems.reduce((p, c) => p + parseFloat(c.totalPrice), 0);

  const orderSubmission = async (orderData) => {
    await submitOrder(orderData);
    dispatch(closeFormModal);
    dispatch(toggleSuccessModal);
  };

  const handleSubmit = (event) => {
    event.preventDefaut();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.emtries());

    const orderData = {
      items: cartItems,
      customer: {
        name: data.name,
        email: data.email,
        streeti: data.street,
        postalCode: data.code,
        city: data.city,
      },
    };
    console.log(orderData);
    orderSubmission(orderData).catch((error) => {
      console.error("Order submission failed:", error);
    });
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center text-gray-800">
      <div className="bg-orange-100 w-1/2 flex flex-col p-6 gap-5 rounded-sm">
        <h2 className="font-bold text-2xl">Checkout</h2>
        <h2 className="font-medium text-2xl">Total Amount: </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 pb-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-bold text-lg">
                Full Name
              </label>
              <input
                type="text"
                className="w-2/3 rounded-md py-1"
                name="name"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-bold text-lg">
                Email Address
              </label>
              <input
                type="email"
                className="w-2/3 rounded-md py-1"
                name="email"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="street" className="font-bold text-lg">
                Street
              </label>
              <input
                type="text"
                className="w-2/3 rounded-md py-1"
                name="street"
                required
              />
            </div>
            <div className="flex flex-row gap-2 justify-start">
              <div className="flex flex-col gap-1">
                <label htmlFor="code" className="font-bold text-lg">
                  Postal Code
                </label>
                <input
                  type="text"
                  className="w-2/3 rounded-md py-1"
                  name="code"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="city" className="font-bold text-lg">
                  City
                </label>
                <input
                  type="text"
                  className="w-2/3 rounded-md py-1"
                  name="city"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end gap-5 pt-5">
            <Button
              handleClick={() => dispatch(closeFormModal())}
              type="button"
            >
              Close
            </Button>
            <Button type="submit">Checkout</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormModal;
