import React, { useState, useEffect } from "react";
import Cart from "./cart";
import "./Menu.css"
import Navbar from "./navbar";
import Products from "./Products";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";



const Menu = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick1 = (item) => {
    console.log(item)
    console.log(cart)
    if (cart.indexOf(item) !==-1) return;

    setCart([...cart, item]);
   toast.success(`Product ${item.title} is added sucessfully`
   , {
    position: toast.POSITION.TOP_CENTER
  })

 
  };

  const handleChange = (item ,d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    console.log(arr)
 
      arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);

  };

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Products handleClick={handleClick1}/>
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
      )}
      <ToastContainer  autoClose={500} draggableDirection="x" />
    </React.Fragment>
    
  );
};

export default Menu;
