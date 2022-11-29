import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import profileImg from "../assets/images/user.png";
import backgroundImg from "../assets/images/userBackground.jpg";

const user = createSlice({
  name: "userReducer",
  initialState: {
    name: "Quartz",
    background: backgroundImg,
    profile: profileImg,
    team: "Wire Jiu-jitsu",
    startDate: "2022.11.11",
    DDay: 1234,
  },
  reducers: {
    addToDo: (state, action) => {
      // state.push({ text: action.payload, id: Date.now() });
    },
    deleteToDo: (state, action) => {
      // state.filter((toDo) => toDo !== action.payload),
    },
  },
});

const userStore = configureStore({ reducer: user.reducer });
// action 따로 생성하지 않아도 .actions에 만들어줌
export const { addToDo, deleteToDo } = user.actions;

// const toDos = createSlice({
//   name: "toDosReducer",
//   initialState: [],
//   reducers: {
//     addToDo: (state, action) => {
//       state.push({ text: action.payload, id: Date.now() });
//     },
//     deleteToDo: (state, action) =>
//       state.filter((toDo) => toDo !== action.payload),
//   },
// });

// const store = configureStore({ reducer: toDos.reducer });
// // action 따로 생성하지 않아도 .actions에 만들어줌
// export const { addToDo, deleteToDo } = toDos.actions;

export default userStore;
