import { createSlice } from "@reduxjs/toolkit";
import icons from "../../assets/icons/index"; // Import icons from index.js

const initialState = [
  { id: 1, name: "Supermarket", icon: icons.supermarket },
  { id: 2, name: "Grab & Go", icon: icons.grabngo },
  { id: 3, name: "Stationery", icon: icons.stationary },
  { id: 4, name: "Groceries", icon: icons.groceries },
  { id: 5, name: "Bakeries", icon: icons.bakeries },
  { id: 6, name: "Pet Shops", icon: icons.petshops },
  { id: 7, name: "Party", icon: icons.party },
  { id: 8, name: "Ethnic", icon: icons.ethnic },
  { id: 9, name: "Flower Shop", icon: icons.flowershop },
  { id: 10, name: "Butchery", icon: icons.butchery },
  { id: 11, name: "Vegetables", icon: icons.vegetables },
  { id: 12, name: "Homecare", icon: icons.homecare },
  { id: 13, name: "Organic", icon: icons.organic },
  { id: 14, name: "Fruits", icon: icons.fruits },
  { id: 15, name: "Fitness", icon: icons.fitness },
  { id: 16, name: "Electronics", icon: icons.electronics },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => action.payload,
  },
});

export const { setCategories } = categoriesSlice.actions;
export const selectCategories = (state) => state.categories;
export default categoriesSlice.reducer;
