import { createSlice } from '@reduxjs/toolkit';
import icons from '../../assets/icons'; // Import icons from index.js

const initialState = [
  { id: 1, name: 'Supermarket', icon: icons.image1 },
  { id: 2, name: 'Grab & Go', icon: icons.image2 },
  { id: 3, name: 'Stationery', icon: icons.image3 },
  { id: 4, name: 'Groceries', icon: icons.image4 },
  { id: 5, name: 'Bakeries', icon: icons.image5 },
  { id: 6, name: 'Pet Shops', icon: icons.image6 },
  { id: 7, name: 'Party', icon: icons.image7 },
  { id: 8, name: 'Ethnic', icon: icons.image8 },
  { id: 9, name: 'Flower Shop', icon: icons.image9 },
  { id: 10, name: 'Butchery', icon: icons.image10 },
  { id: 11, name: 'Vegetables', icon: icons.image11 },
  { id: 12, name: 'Homecare', icon: icons.image12 },
  { id: 13, name: 'Organic', icon: icons.image13 },
  { id: 14, name: 'Fruits', icon: icons.image14 },
  { id: 15, name: 'Fitness', icon: icons.image15 },
  { id: 16, name: 'Electronics', icon: icons.image16 },
];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => action.payload,
  },
});

export const { setCategories } = categoriesSlice.actions;
export const selectCategories = (state) => state.categories;
export default categoriesSlice.reducer;
 











