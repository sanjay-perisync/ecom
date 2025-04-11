"use client";

import Link from "next/link";
import React from "react";

const OrderConfirmation = ({ orderId }) => {

  return (
    <div className="max-w-2xl mx-auto py-12 text-center px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-green-700">Thank You for Your Order!</h1>
      <img src='https://static.vecteezy.com/system/resources/previews/024/830/372/non_2x/delivery-truck-with-parcel-box-transport-vehicle-3d-rendering-free-png.png' alt="" className="w-96"/>
      <p className="text-lg text-gray-700 mb-2">
        Your order has been placed successfully.
      </p>
      {orderId && (
        <p className="text-md text-gray-600">
        <span className="font-semibold">Order ID:</span> {orderId}
      </p>
      
      )}
      <div className="mt-6">
        <p className="text-gray-500 mb-4">
          You’ll receive a confirmation email shortly. We’ll notify you when your order ships.
        </p>
        <Link href={'/orders'} className="text-white font-semibold bg-green-800 p-2 rounded-xl">Go to your Orders</Link>
      </div>

     
    </div>
  );
};

export default OrderConfirmation;
