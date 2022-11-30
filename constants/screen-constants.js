export const TAB_NAME = {
  HOME: "HomeTab",
  TECH_TREE: "TechTreeTab",
  MY_PAGE: "MyPageTab",
};

export const SCREEN_NAME = {
  HOME: "Home",
  TECH_TREE: "Tech Tree",
  MY_PAGE: "My Page",
  TECH_DETAIL: "Tech Detail",
  LOGIN: "Login",
  EDIT_MY_PAGE: "Edit My Page",
  WRITE_DIARY: "Write Diary",
};

export const NAV_ICON_MAP = {
  [TAB_NAME.HOME]: {
    [true]: "home",
    [false]: "home-outline",
  },
  [TAB_NAME.TECH_TREE]: {
    [true]: "graph",
    [false]: "graph-outline",
  },
  [TAB_NAME.MY_PAGE]: {
    [true]: "account",
    [false]: "account-outline",
  },
};
