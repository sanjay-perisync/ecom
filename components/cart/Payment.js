import React from 'react';
import { useDispatch } from 'react-redux';
import { setPaymentMethod } from '@/redux/slices/addressSlice';

const Payment = ({ selectedPayment, setSelectedPayment }) => {
  const dispatch = useDispatch();

  const handlePaymentChange = (value) => {
    setSelectedPayment(value);
    dispatch(setPaymentMethod(value));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mt-8 mb-2">Payment Options</h2>
      <div className="space-y-2">
        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={selectedPayment === "cod"}
            onChange={() => handlePaymentChange("cod")}
          />
          Cash on Delivery
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
            value="card"
            checked={selectedPayment === "card"}
            onChange={() => handlePaymentChange("card")}
          />
          Credit / Debit Card
        </label>

        {selectedPayment === "card" && (
          <div className="ml-6 mt-2 space-y-2">
            <input type="text" placeholder="Card Number" className="border w-full px-3 py-2 rounded" />
            <div className="flex gap-2">
              <input type="text" placeholder="MM/YY" className="border w-full px-3 py-2 rounded" />
              <input type="text" placeholder="CVV" className="border w-full px-3 py-2 rounded" />
            </div>
            <input type="text" placeholder="Name on Card" className="border w-full px-3 py-2 rounded" />
          </div>
        )}

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
            value="upi"
            checked={selectedPayment === "upi"}
            onChange={() => handlePaymentChange("upi")}
          />
          UPI / Wallet
        </label>

        {selectedPayment === "upi" && (
          <div className="ml-6 mt-2 space-y-2">
            <div className="flex gap-3">
              {["Google Pay", "PhonePe", "Paytm"].map((app) => (
                <label
                  key={app}
                  className="flex items-center gap-2 border px-3 py-2 rounded cursor-pointer"
                >
                  <input type="radio" name="upiApp" value={app.toLowerCase()} />
                  {app}
                </label>
              ))}
            </div>
            <input type="text" placeholder="Enter your UPI ID" className="border w-full px-3 py-2 rounded" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
