import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    id: 0,
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    addressLine: "",
    city: "",
    province: "",
    receiverName: "",
    detail: "",
    district: "",
    isVerified: "",
    isAdmin: "",
    cart: 0,
    checkout: 0,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.value.id = action.payload.id;
      state.value.email = action.payload.email;
      state.value.firstName = action.payload.firstName
      state.value.lastName = action.payload.lastName
      state.value.addressLine = action.payload.addressLine;
      state.value.city = action.payload.city;
      state.value.province = action.payload.province;
      state.value.receiverName = action.payload.receiverName;
      state.value.isVerified = action.payload.isVerified;
      state.value.isAdmin = action.payload.isAdmin;
    },
    logoutUser: (state, action) => {
      state.value.email = "";
      state.value.name = "";
    },
    updateUser: (state, action) => {
      state.value.email = action.payload.email;
    },
    addCart: (state) => {
      state.value.cart += 1;
    },
    delCart: (state) => {
      state.value.cart -= 1;
    },
    addCheckout: (state) => {
      state.value.checkout = 1;
    },
    checkoutList: (state) => {
      state.value.checkout = 0;
    },
  },
});

export const {
  loginUser,
  logoutUser,
  updateUser,
  addCart,
  delCart,
  addCheckout,
  checkoutList,
} = userSlice.actions;
export default userSlice.reducer;
