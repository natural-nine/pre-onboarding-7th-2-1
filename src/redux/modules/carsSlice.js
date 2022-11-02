import { createSlice } from "@reduxjs/toolkit";
import instance from "../../shared/axios";

const initialState = {
  loading: true,
  carsList: [],
  success: false,
  failure: false,
};

export const loadCarDB = (fuel, seg, type) => {
  return async function (dispatch) {
    await instance
      .get("/cars", {
        params: {
          fuelType: fuel,
          segment: seg,
          type: "goo",
        },
      })
      .then(res => {
        console.log(res.data.payload);
        dispatch(loadCar(res.data.payload));
      });
  };
};

const carsSlice = createSlice({
  name: "car",
  initialState: initialState,
  reducers: {
    loadCar: (state, action) => {
      state.carsList = action.payload;
      state.loading = false;
      state.success = true;
    },
  },
});

export const { loadCar } = carsSlice.actions;

export default carsSlice.reducer;
