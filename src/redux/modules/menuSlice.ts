import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { menuStateTypes } from "../../types/menuTypes";

const initialState: menuStateTypes = {
  menuState: [
    { title: "전체", value: "", isMenu: true, id: 0 },
    { title: "대형", value: "E", isMenu: false, id: 1 },
    { title: "중형", value: "D", isMenu: false, id: 2 },
    { title: "소형", value: "C", isMenu: false, id: 3 },
  ],
  isSegment: "",
};

export const setIsMenu = (id: number) => {
  return function (action: any) {
    action(loadMenu(id));
  };
};

export const setIsSegment = (seg: string) => {
  return function (dispatch: any) {
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
