import {
  AFTER_PASS,
  GUARD,
  GUARD_PASS,
  STANDING,
} from "./constants/tech-category-constants";

export const theme = {
  black: "#303841",
  grey: "#596065",
  white: "#FFFFFF",
  purpleLight: "#d6c6f2", // rgb(214, 198, 242)
  purple: "#AA96DA", // rgb(170,150,219)
  purpleDark: "#5E4B9C", // rgb(93,75,156)
  skyBlue: "#A8D8EA",
  pink: "#FCBAD3",
  yellow: "#FFFFD2",
  red: "#f70200",
  lightred: "#FFCCCB",
  background: "#F9F9F9",
  techBackground: "#0D1018",
  [STANDING]: "#A8D8EA",
  [GUARD]: "#FCBAD3",
  [GUARD_PASS]: "#B7E5DD",
  [AFTER_PASS]: "#F1F0C0",
  marginHorizontal: 12,
};

export const themeBelt = {
  white: "#FFFFFF",
  blue: "#004a9d",
  purple: "#74529e",
  brown: " #804b44",
  black: "#303841",
  red: "#f70200",
};
