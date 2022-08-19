import React from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Navbar = ({ setShow, size }) => {
  return (
    <div id="nav">
      <div className="nav_box">
        <div className="my_shop" onClick={() => setShow(true)}>
          My Shoping
        </div>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
           <AiOutlineShoppingCart/>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
