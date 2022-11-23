import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import instance from "../../shared/axios";

const initialState = {
  loading: true,
  carsList: [],
  success: false,
  failure: false,
};

export const loadCarDB = (seg: string) => {
  return async function (dispatch: any) {
    await instance
      .get("/cars", {
        params: {
          segment: seg,
        },
      })
      .then(res => {
        dispatch(loadCar(res.data.payload));
      });
  };
};

export const resetCarDB = () => {
  return function (dispatch: any) {
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
    resetCar: state => {
      state.loading = true;
      state.carsList = [];
      state.success = false;
      state.failure = false;
    },
  },
});

export const { loadCar, resetCar } = carsSlice.actions;

export default carsSlice.reducer;
