"use client";

import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const OrdersPage = () => {
  const orders = useSelector((state) => state.order.orders);
  const statusMap = useSelector((state) => state.orderStatus.statusMap);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl lg:text-3xl font-bold mb-6">Your Orders</h1>

      {Object.keys(orders).length === 0 ? (
        <div className="flex flex-col items-center">
          <img
            src="https://png.pngtree.com/png-clipart/20230118/original/pngtree-order-now-tag-design-button-png-image_8920229.png"
            alt=""
            className="w-64"
          />
          <p className="text-gray-600 font-semibold text-xl">
            <i>You haven't placed any orders yet.</i>
          </p>
        </div>
      ) : (
        Object.entries(orders).map(([orderId, items]) => {
          const itemStatuses = Object.values(statusMap?.[orderId] || {});
          const uniqueStatuses = [...new Set(itemStatuses)];

          return (
            <div
              key={orderId}
              className="border border-gray-200 rounded-lg mb-6 p-4 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-green-700 mb-3">
                Order ID: #{orderId}
              </h2>

              <p className="text-sm font-medium text-gray-600 mb-3">
                Status:{" "}
                <span className="text-gray-400 uppercase">
                  {uniqueStatuses.length > 0
                    ? uniqueStatuses.join(", ")
                    : "Placed"}
                </span>
              </p>

              {items.length ? (
                <div className="space-y-3">
                  {items.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between p-3 rounded-md">
                        <div>
                          <div className="flex items-center gap-4 pb-4">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-16 h-16 object-contain rounded"
                            />
                            <div>
                              <p className="font-medium">{item.title}</p>
                              <p className="text-sm text-gray-600">
                                Qty: {item.quantity}
                              </p>
                            </div>
                          </div>

                          <Link
                            href={`/orders/${orderId}`}
                            className="hover:underline hover:text-green-800 font-semibold text-blue-700"
                          >
                            View Order Details
                          </Link>
                        </div>
                        <p className="font-semibold">${item.price}</p>
                      </div>

                      {index !== items.length - 1 && (
                        <hr className="my-2 border-gray-300" />
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-red-500">
                  No items found for this order.
                </p>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default OrdersPage;
