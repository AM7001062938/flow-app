import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  phoneNumber: '',
  otpVerified: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    verifyOtp: (state) => {
      state.otpVerified = true;
      state.isAuthenticated = true;
    },
    signOut: (state) => {
      state.isAuthenticated = false;
      state.phoneNumber = '';
      state.otpVerified = false;
    },
  },
});

export const { setPhoneNumber, verifyOtp, signOut } = authSlice.actions;
export default authSlice.reducer;
