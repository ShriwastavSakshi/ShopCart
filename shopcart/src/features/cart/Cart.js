import React from "react";
import { useSelector, useDispatch } from "react-redux";
//import { fetchAsync } from "./productsSlice";
//import { addAsync } from "../cart/cartSlice";

import "./cart.css";
import { deleteAsync } from "./cartSlice";

export function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

 

  return (
    <div>
      <div>
      
        {items.map((item) => (
           <div className='cart-item'>
           <img className='img-fluid' src={item.thumbnail} alt='' />
           <div className='description'>
             <p>{item.title}</p>
             <span>{item.brand}</span>
             <strong>Rs {item.price}</strong>
           </div>
           <div className='quantity'>
             Quantity
             <select name="" id="">
               <option value={1}>1</option>
               <option value={2}>2</option>
               <option value={3}>3</option>
             </select>
           </div>
           <div className='close'>
             <button onClick={()=>dispatch(deleteAsync(item.id))}>X</button>
           </div>
         </div>
        ))}
      </div>
    </div>
  );
}