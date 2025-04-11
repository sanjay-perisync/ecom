
"use client";

import React from 'react';
import { useSelector } from 'react-redux';

import AddBtn from './AddBtn';
import Link from 'next/link';

const CartPage = () => {

  const cartItems = useSelector((state) => state.cart.items);


  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);


  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
    

      {cartItems.length === 0 ? (
        <div className='flex flex-col items-center justify-center mt-30'>
        <img src='https://imtech.mv/public/images/empty-cart.png' alt='' className="w-40 md:w-64"/>
        <p className="text-gray-500 text-xl font-semibold"><i>Your cart is empty.</i></p>
        </div>
      ) : (
        <div className="space-y-4">
            <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
          {cartItems.map((item) => (
            
            <div
              key={item.id}
              className="flex justify-between items-center gap-5 p-4 border rounded-lg shadow-sm"
            >


              <div className="flex items-center gap-5">
                <Link href={`/products/${item.id}`} className="flex items-center gap-5">
                  <img src={item.image} alt="" className="h-auto w-12" />
                  <div>
                    <h2 className="font-semibold text-lg hover:underline">{item.title}</h2>
                    <p className="text-gray-500">Price: ₹{item.price}</p>
                  </div>
                </Link>

                <div className="ml-auto">
                  <AddBtn product={item} />
                </div>
              </div>


              <div className="text-right font-semibold">
                ₹{item.price * item.quantity}
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center  mt-6 border-t pt-4">
            <Link href='/orderdetails' className='flex justify-center items-center border border-green-700 rounded-lg bg-green-700 py-4 px-4 font-semibold cursor-pointer h-10 w-auto text-white'>Checkout</Link>
            <p className="text-xl font-semibold">Total: ₹{totalPrice}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
