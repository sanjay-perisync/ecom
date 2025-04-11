import { createSlice } from '@reduxjs/toolkit';

const orderStatusSlice = createSlice({
  name: 'orderStatus',
  initialState: {
    statusMap: {}, 
  },
  reducers: {
    setOrderStatus: (state, action) => {
        const { orderId, itemIndex, status = "placed" } = action.payload;
        if (!state.statusMap[orderId]) {
          state.statusMap[orderId] = {};
        }
        state.statusMap[orderId][itemIndex] = status;
      }
      ,
      
  },
});

export const { setOrderStatus } = orderStatusSlice.actions;
export default orderStatusSlice.reducer;
