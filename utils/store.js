import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { getFormattedToday } from "./date-fn";

// selected date in calendar
const editDiaryInital = {
  diaryCategory: "",
  techCategory: "",
  title: "",
  content: "",
};
const initialState = {
  selectedDate: getFormattedToday(),
  editDiary: editDiaryInital,
};
const date = createSlice({
  name: "dateReducer",
  initialState: initialState,
  reducers: {
    updateSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    initializeEditDiray: (state, action) => {
      state.editDiary = editDiaryInital;
    },
    updateDiaryCategory: (state, action) => {
      state.editDiary.diaryCategory = action.payload;
    },
    updateTechCategory: (state, action) => {
      state.editDiary.techCategory = action.payload;
    },
  },
});

const dateStore = configureStore({ reducer: date.reducer });
export const {
  updateSelectedDate,
  initializeEditDiray,
  updateDiaryCategory,
  updateTechCategory,
} = date.actions;

export default dateStore;
