import { createSlice } from "@reduxjs/toolkit";
import { colors } from "../../utils/constants";

export interface CommonStateInterface {
  darkMode: boolean;
  primaryColor: string;
  secondaryColor: string;
}

const initialState: CommonStateInterface = {
  darkMode: false,
  primaryColor: colors.blue.main,
  secondaryColor: colors.green.main,
};

const commonSlice = createSlice({
  name: "common",
  initialState: initialState,
  reducers: {
    toggleMode(state) {
      state.darkMode = !state.darkMode;
    },
    changePrimaryColor(state, action) {
      console.log(action.payload, "pri");
      state.primaryColor = action.payload;
    },
    changeSecondaryColor(state, action) {
      console.log(action.payload, "sec");
      state.secondaryColor = action.payload;
    },
  },
});

export const { toggleMode, changePrimaryColor, changeSecondaryColor } =
  commonSlice.actions;
export default commonSlice.reducer;
