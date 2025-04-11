'use client';

import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setOrderStatus } from '@/redux/slices/orderStatusSlice';

const ViewFullInfo = ({ orderId }) => {
  const dispatch = useDispatch();
  const { list, defaultId, paymentMethod } = useSelector((state) => state.address);
  const statusMap = useSelector((state) => state.orderStatus.statusMap);
  const orders = useSelector((state) => state.order.orders);

  const selectedAddress = list.find((addr) => addr.id === defaultId);
  const items = orders[orderId] || [];

  const handleStatusChange = (itemIndex, status) => {
    dispatch(setOrderStatus({ orderId, itemIndex, status }));
  };

  return (
    <div className="p-4 space-y-6 mx-auto max-w-5xl mt-5">
      <Link href={'/orders'} className='bg-green-800 rounded-xl p-2 text-white font-semibold mb-8 inline-block'>
        Go back to orders
      </Link>

      <h2 className="text-lg font-semibold mb-2 mt-5">Shipping Address</h2>
      {selectedAddress ? (
        <div className="p-4 rounded bg-gray-50">
          <p><strong>Name:</strong> {selectedAddress.name}</p>
          <p><strong>Phone:</strong> {selectedAddress.phone}</p>
          <p><strong>Street:</strong> {selectedAddress.street}</p>
          <p><strong>City:</strong> {selectedAddress.city}</p>
          <p><strong>Pincode:</strong> {selectedAddress.pincode}</p>
          <p><strong>State:</strong> {selectedAddress.state}</p>
        </div>
      ) : (
        <p className="text-gray-500">No address selected.</p>
      )}

      <h2 className="text-lg font-semibold mb-2">Payment Method</h2>
      <div className="p-4 rounded bg-gray-50">
        {paymentMethod ? (
          <p className="uppercase">{paymentMethod.toUpperCase()}</p>
        ) : (
          <p className="text-gray-500">COD</p>
        )}
      </div>

      <h2 className="text-lg font-semibold mb-4">Order Items</h2>
      {items.length ? (
        items.map((item, index) => {
          const itemStatus = statusMap?.[orderId]?.[index] || 'placed';

          return (
            <div key={index} className="p-4 border border-gray-300 rounded-lg mb-4 bg-white">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  <p className={`mt-2 font-bold ${
                    itemStatus === 'cancelled' ? 'text-red-600' :
                    itemStatus === 'Return requested' ? 'text-yellow-600' :
                    'text-green-700'
                  }`}>
                    {itemStatus.charAt(0).toUpperCase() + itemStatus.slice(1)}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-3">
                <button
                  onClick={() => handleStatusChange(index, 'Return requested')}
                  className="border px-3 py-1 rounded hover:bg-gray-100"
                  disabled={itemStatus !== 'placed'}
                >
                  Return
                </button>
                <button
                  onClick={() => handleStatusChange(index, 'cancelled')}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 disabled:opacity-50"
                  disabled={itemStatus !== 'placed'}
                >
                  Cancel
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p>No items found for this order.</p>
      )}
    </div>
  );
};

export default ViewFullInfo;
