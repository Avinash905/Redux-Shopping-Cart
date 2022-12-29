import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItems: [],
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
  {
    add: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find((ele) => {
        return ele.id === item.id;
      });
      if (isItemExist) {
        state.cartItems.forEach((quanItem) => {
          if (quanItem.id === item.id) {
            quanItem.quantity += 1;
          }
        });
      } else {
        item.quantity = 0;
        state.cartItems.push(item);
      }
    },

    dec: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find((ele) => {
        return ele.id === item;
      });
      if (isItemExist.quantity >= 1) {
        state.cartItems.forEach((quanItem) => {
          if (quanItem.id === isItemExist.id) {
            quanItem.quantity -= 1;
          }
        });
      }
    },

    remove: (state, action) => {
      state.cartItems = state.cartItems.filter((ele) => {
        return ele.id !== action.payload;
      });
    },

    calcPrice: (state) => {
      let sum = 0;
      state.cartItems.forEach((ele) => {
        sum += ele.price * (ele.quantity + 1);
      });
      state.subtotal = sum;
      state.shipping = state.subtotal > 1000 ? 0 : 15;
      state.tax = +(state.subtotal * 0.18).toFixed(2);
      state.total = (state.shipping + state.tax + state.subtotal).toFixed(2);
    },
  }
);
