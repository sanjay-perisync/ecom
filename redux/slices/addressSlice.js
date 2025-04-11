import { createSlice } from '@reduxjs/toolkit';

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    list: [],
    defaultId: null,
    paymentMethod: '',
  },
  reducers: {
    addAddress: (state, action) => {
      const newAddress = { id: Date.now(), ...action.payload };
      state.list.push(newAddress);
      if (state.list.length === 1) state.defaultId = newAddress.id;
    },
    deleteAddress: (state, action) => {
      state.list = state.list.filter(addr => addr.id !== action.payload);
      if (state.defaultId === action.payload) {
        state.defaultId = state.list[0]?.id || null;
      }
    },
    setDefault: (state, action) => {
      state.defaultId = action.payload;
    },
    clearAddresses: (state) => {
      state.list = [];
      state.defaultId = null;
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  }
});

export const {
  addAddress,
  deleteAddress,
  setDefault,
  clearAddresses,
  setPaymentMethod
} = addressSlice.actions;

export default addressSlice.reducer;
