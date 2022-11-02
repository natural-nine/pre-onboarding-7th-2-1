import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuState: [
    { title: "전체", isMenu: true, id: 0 },
    { title: "대형", isMenu: false, id: 1 },
    { title: "중형", isMenu: false, id: 2 },
    { title: "소형", isMenu: false, id: 3 },
  ],
};

export const setIsMenu = id => {
  return function (dispatch) {
    dispatch(loadMenu(id));
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
  },
});

export const { loadMenu } = menuSlice.actions;

export default menuSlice.reducer;