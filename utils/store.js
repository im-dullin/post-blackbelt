import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { getFormattedToday } from "./date-fn";

// selected date in calendar

const initialState = {
  selectedDate: getFormattedToday(),
};
const date = createSlice({
  name: "dateReducer",
  initialState: initialState,
  reducers: {
    updateSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

const dateStore = configureStore({ reducer: date.reducer });
export const { updateSelectedDate } = date.actions;

export default dateStore;
