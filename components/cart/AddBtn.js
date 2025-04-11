'use client';

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementQuantity, decrementQuantity } from "@/redux/slices/cartSlice";

function AddBtn({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);


  if (!product || !product.id) {
    return null;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity(product.id));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(product.id));
  };

  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <div className="">
      
      {cartItem ? (
        <div className="flex justify-center items-center border bg-green-700 border-green-800 rounded-lg px-2  text-white font-bold h-10 w-full">
          <button onClick={handleDecrement} className="text-[22px] font-bold cursor-pointer">
            -
          </button>
          <span className="px-4">{cartItem.quantity}</span>
          <button onClick={handleIncrement} className="text-[20px] font-bold cursor-pointer">
            +
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className="border border-green-700 rounded-lg bg-green-50 px-4 cursor-pointer text-green-700 h-10 w-full"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default AddBtn;