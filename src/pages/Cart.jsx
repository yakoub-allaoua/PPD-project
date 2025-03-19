import React from "react";
import { General } from "../components";
import SiderTest from "../components/SiderTest";
import AllHouses from "./AllHouses";
import ConfirmLogout from "../components/Error/ConfirmLogout";
const Cart = () => {
  return (
    <div className="mt-[100px] align-element">
      <General />
      <ConfirmLogout />
    </div>
  );
};

export default Cart;
