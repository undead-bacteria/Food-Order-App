import React from "react";
import Logo from "../assets/logo.jpg";
import Cart from "./Cart";

function Header(props) {
  return (
    <div className="container flex flex-row justify-between mx-auto p-5 items-center">
      <div className="flex flex-row justify-between items-center gap-5">
        <img
          src={Logo}
          alt="logo"
          className="h-14 rounded-full border-yellow-600 border-2"
        />
        <h2 className="text-2xl text-yellow-500 font-bold">FOOD ORDER APP</h2>
      </div>
      <Cart />
    </div>
  );
}

export default Header;
