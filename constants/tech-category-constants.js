export const STANDING = "STANDING";
export const GUARD = "GUARD";
export const GUARD_PASS = "GUARD_PASS";
export const AFTER_PASS = "AFTER_PASS";
export const ETC = "ETC";

export const TECH_CAT = [
  {
    ID: STANDING,
    KOR: "스탠딩",
    ENG: "Standing",
    TITLE: "STANDING",
  },
  { ID: GUARD, KOR: "가드", ENG: "Guard", TITLE: "GUARD" },
  {
    ID: GUARD_PASS,
    KOR: "가드 패스",
    ENG: "Guard Pass",
    TITLE: "GUARD PASS",
  },
  {
    ID: AFTER_PASS,
    KOR: "패스 이후",
    ENG: "After Pass",
    TITLE: "AFTER PASS",
  },
  { ID: ETC, KOR: "기타", ENG: "Etc.", TITLE: "Etc." },
];

export const TECH_CAT_IDX = {
  [ETC]: 0,
  [STANDING]: 1,
  [GUARD]: 2,
  [GUARD_PASS]: 3,
  [AFTER_PASS]: 4,
};

export const TECH_CAT_MAP = {
  [STANDING]: {
    ID: STANDING,
    KOR: "스탠딩",
    ENG: "Standing",
    TITLE: "STANDING",
  },
  [GUARD]: { ID: GUARD, KOR: "가드", ENG: "Guard", TITLE: "GUARD" },
  [GUARD_PASS]: {
    ID: GUARD_PASS,
    KOR: "가드 패스",
    ENG: "Guard Pass",
    TITLE: "GUARD PASS",
  },
  [AFTER_PASS]: {
    ID: AFTER_PASS,
    KOR: "패스 이후",
    ENG: "After Pass",
    TITLE: "AFTER PASS",
  },
  [ETC]: { ID: ETC, KOR: "기타", ENG: "Etc.", TITLE: "Etc." },
};
