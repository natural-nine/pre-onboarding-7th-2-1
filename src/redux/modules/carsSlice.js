import { createSlice } from "@reduxjs/toolkit";
import instance from "../../shared/axios";

const initialState = {
  loading: true,
  carsList: [],
  success: false,
  failure: false,
};

export const loadCarDB = (seg, fuel) => {
  return async function (dispatch) {
    await instance
      .get("/cars", {
        params: {
          segment: seg,
          fuelType: fuel,
        },
      })
      .then(res => {
        console.log(res.data);
        dispatch(loadCar(res.data.payload));
      });
  };
};

export const resetCarDB = () => {
  return function (dispatch) {
    dispatch(resetCar());
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
    resetCar: (state, action) => {
      state.loading = true;
      state.carsList = [];
      state.success = false;
      state.failure = false;
    },
  },
});

export const { loadCar, resetCar } = carsSlice.actions;

export default carsSlice.reducer;
