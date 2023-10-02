import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAsync,
} from "./productsSlice";
import "./Products.css";

export function Products() {
  
  const dispatch = useDispatch();
  
  return (
    <div>
      <div>
        <button
          
          aria-label="Decrement value"
          onClick={() => dispatch(fetchAsync())}
        >
          fetch Products
        </button>
        <div className="card">
          <img src="jeans3.jpg" alt="Denim Jeans" style={{width:"100%"}} />
          <h1>Tailored Jeans</h1>
          <p className="price">$19.99</p>
          <p>Some text about the jeans..</p>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
}
