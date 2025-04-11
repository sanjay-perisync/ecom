import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: {}, 
  },
  reducers: {
    createOrder: (state, action) => {
      const { orderId, items } = action.payload;
      state.orders[orderId] = items;
    },
  },
});

export const { createOrder } = orderSlice.actions;
export default orderSlice.reducer;
