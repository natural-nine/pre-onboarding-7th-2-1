import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuState: [
    { title: "전체", value: "", isMenu: true, id: 0 },
    { title: "대형", value: "E", isMenu: false, id: 1 },
    { title: "중형", value: "D", isMenu: false, id: 2 },
    { title: "소형", value: "C", isMenu: false, id: 3 },
  ],
  isSegment: "",
};

export const setIsMenu = id => {
  return function (dispatch) {
    dispatch(loadMenu(id));
  };
};

export const setIsSegment = seg => {
  return function (dispatch) {
    dispatch(loadSegment(seg));
  };
};

const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    loadMenu: (state, action) => {
      state.menuState.map(i => (i.isMenu = false));
      const newIndex = state.menuState.findIndex(v => v.id === action.payload);
      state.menuState[newIndex].isMenu = true;
    },
    loadSegment: (state, action) => {
      state.isSegment = action.payload;
    },
  },
});

export const { loadMenu, loadSegment } = menuSlice.actions;

export default menuSlice.reducer;
