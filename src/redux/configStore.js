import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./modules/carsSlice";
import menuSlice from "./modules/menuSlice";

const store = configureStore({
  reducer: { loadCar: carsSlice, loadMenu: menuSlice },
});

export default store;
