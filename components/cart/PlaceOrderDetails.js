"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAddress, deleteAddress, setDefault } from "@/redux/slices/addressSlice";
import { useRouter } from "next/navigation";
import Payment from "@/components/cart/Payment";
import { toast } from "react-hot-toast";
import { createOrder } from "@/redux/slices/orderSlice";
import { clearCart } from "@/redux/slices/cartSlice";



const PlaceOrderDetailsPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const addresses = useSelector((state) => state.address.list);
  const defaultId = useSelector((state) => state.address.defaultId);

  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState({});
  const [selectedPayment, setSelectedPayment] = useState("cod");

  const [formData, setFormData] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });

  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = "This field is required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAdd = () => {
    if (!validateForm()) return;
    dispatch(addAddress(formData));
    setFormData({
      name: "",
      street: "",
      city: "",
      state: "",
      pincode: "",
      phone: "",
    });
    setErrors({});
    setShowForm(false);
  };




  const cartItems = useSelector((state) => state.cart.items);

  // const handlePlaceOrder = () => {
  //   if (!defaultId) {
  //     toast.error("Please select or add a delivery address.");
  //     return;
  //   }
  
  //   if (!selectedPayment) {
  //     toast.error("Please select a payment method.");
  //     return;
  //   }
  
  //   router.push("/orderdetails/orderconfirmation");
  // };
  const handlePlaceOrder = () => {
    if (!defaultId) {
      toast.error("Please select or add a delivery address.");
      return;
    }
  
    if (!selectedPayment) {
      toast.error("Please select a payment method.");
      return;
    }
  
    const orderId = Date.now(); 
    dispatch(createOrder({ orderId, items: cartItems }));
    
  
    localStorage.setItem("currentOrderId", orderId); 
    dispatch(clearCart());
    router.push(`/orderdetails/${orderId}`);

  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Delivery Details</h1>

      <button
        className="mb-4 text-green-700 underline font-medium"
        onClick={() => setShowForm((prev) => !prev)}
      >
        {showForm ? "Close" : "+ Add New Address"}
      </button>

      {showForm && (
        <div className="space-y-3 p-4 rounded-md bg-gray-50 mb-6">
          {["name", "street", "city", "state", "pincode", "phone"].map((field) => (
            <div key={field}>
              <input
                className="border w-full px-3 py-2 rounded"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
              />
              {errors[field] && (
                <p className="text-sm text-red-600 mt-1">{errors[field]}</p>
              )}
            </div>
          ))}
          <button
            className="bg-green-800 text-white px-4 py-2 rounded"
            onClick={handleAdd}
          >
            Save Address
          </button>
        </div>
      )}

      <h2 className="text-xl font-semibold mt-6 mb-2">Saved Addresses</h2>
      <div className="space-y-3">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className={`border p-4 rounded-md ${
              defaultId === addr.id ? "border-green-600" : "border-gray-300"
            }`}
          >
            <p className="font-semibold">{addr.name}</p>
            <p>
              {addr.street}, {addr.city}, {addr.state} - {addr.pincode}
            </p>
            <p>Phone: {addr.phone}</p>
            <div className="mt-2 flex gap-4">
              <button
                className="text-blue-600 hover:underline"
                onClick={() => dispatch(setDefault(addr.id))}
              >
                {defaultId === addr.id ? "Default" : "Set as Default"}
              </button>
              <button
                className="text-red-600 hover:underline"
                onClick={() => dispatch(deleteAddress(addr.id))}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

   

   <div>
   <Payment
  selectedPayment={selectedPayment}
  setSelectedPayment={setSelectedPayment}
/>

   </div>

      <div className="mt-6 text-right">
        <button
          className="bg-green-700 text-white px-6 py-2 rounded-md font-semibold"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrderDetailsPage;
