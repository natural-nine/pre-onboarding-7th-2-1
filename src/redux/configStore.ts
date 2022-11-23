import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./modules/carsSlice";
import menuSlice from "./modules/menuSlice";

const store = configureStore({
  reducer: { loadCar: carsSlice, loadMenu: menuSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
