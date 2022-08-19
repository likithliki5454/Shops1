import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";



const Cart = ({ cart, setCart, handleChange }) => {


  const handleRemove = (iv) => {
    const arr = cart.filter((d) => {
      if(d.id === iv){
        toast.success(`product ${d.title} Deleted sucessfully`);
        return 0 
      }
      return 1
    }
    );
    setCart(arr);
  };

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            
            <button onClick={()=>handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
   <ToastContainer  autoClose={500} draggableDirection="y" />
    </article>
    
  );
};

export default Cart;
