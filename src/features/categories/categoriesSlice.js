import { createSlice } from "@reduxjs/toolkit";
import icons from "../../assets/icons/index"; // Import icons from index.js

const initialState = [
  { id: 1, name: "Supermarket", icon: icons.supermarket, title: "Supermarket" },
  { id: 2, name: "Grab & Go", icon: icons.grabngo, title: "Grab & Go" },
  { id: 3, name: "Stationery", icon: icons.stationary, title: "Stationery" },
  { id: 4, name: "Groceries", icon: icons.groceries, title: "Groceries" },
  { id: 5, name: "Bakeries", icon: icons.bakeries, title: "Bakeries" },
  { id: 6, name: "Pet Shops", icon: icons.petshops, title: "Pet Shops" },
  { id: 7, name: "Party", icon: icons.party, title: "Party" },
  { id: 8, name: "Ethnic", icon: icons.ethnic, title: "Ethnic" },
  { id: 9, name: "Flower Shop", icon: icons.flowershop, title: "Flower Shop" },
  { id: 10, name: "Butchery", icon: icons.butchery, title: "Butchery" },
  { id: 11, name: "Vegetables", icon: icons.vegetables, title: "Vegetables" },
  { id: 12, name: "Homecare", icon: icons.homecare, title: "Homecare" },
  { id: 13, name: "Organic", icon: icons.organic, title: "Organic" },
  { id: 14, name: "Fruits", icon: icons.fruits, title: "Fruits" },
  { id: 15, name: "Fitness", icon: icons.fitness, title: "Fitness" },
  { id: 16, name: "Electronics", icon: icons.electronics, title: "Electronics" },
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
