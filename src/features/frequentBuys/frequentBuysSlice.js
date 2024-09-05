import { createSlice } from '@reduxjs/toolkit';
import icons from '../../assets/icons'; // Import icons from index.js

const initialState = [
  {
    id: 1,
    name: 'Oman Chili Potato Chips Spicy Indian Flavour',
    image: icons.product1, // Use the product image from icons
    price: '20 AED',
    vendor: 'Zoom Supermarket',
    weight: '48g',
    rating: 4.9,
    quantity: 0,
  },
  {
    id: 2,
    name: 'Other Chips Brand',
    image: icons.product1, // Use another product image
    price: '15 AED',
    vendor: 'Other Vendor 1',
    weight: '50g',
    rating: 4.7,
    quantity: 0,
  },
  {
    id: 2,
    name: 'Other Chips Brand',
    image: icons.product1, // Use another product image
    price: '15 AED',
    vendor: 'Other Vendor 1',
    weight: '50g',
    rating: 4.7,
    quantity: 0,
  },
  {
    id: 2,
    name: 'Other Chips Brand',
    image: icons.product1, // Use another product image
    price: '15 AED',
    vendor: 'Other Vendor 1',
    weight: '50g',
    rating: 4.7,
    quantity: 0,
  },
  {
    id: 2,
    name: 'Other Chips Brand',
    image: icons.product1, // Use another product image
    price: '15 AED',
    vendor: 'Other Vendor 1',
    weight: '50g',
    rating: 4.7,
    quantity: 0,
  },
  {
    id: 2,
    name: 'Other Chips Brand',
    image: icons.product1, // Use another product image
    price: '15 AED',
    vendor: 'Other Vendor 1',
    weight: '50g',
    rating: 4.7,
    quantity: 0,
  },
  {
    id: 2,
    name: 'Other Chips Brand',
    image: icons.product1, // Use another product image
    price: '15 AED',
    vendor: 'Other Vendor 1',
    weight: '50g',
    rating: 4.7,
    quantity: 0,
  },
  // Add more items similarly
];

const frequentBuysSlice = createSlice({
  name: 'frequentBuys',
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = frequentBuysSlice.actions;

export const selectFrequentBuys = (state) => state.frequentBuys;

export default frequentBuysSlice.reducer;
