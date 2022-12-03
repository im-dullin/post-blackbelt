export const STANDING = "STANDING";
export const GUARD = "GUARD";
export const GUARD_PASS = "GUARD_PASS";
export const AFTER_PASS = "AFTER_PASS";
export const NONE = "NONE";

export const TECH_CAT = [
  { ID: NONE, KOR: "구분 없음", ENG: "None", TITLE: "NONE" },
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
];

export const TECH_CAT_IDX = {
  [NONE]: 0,
  [STANDING]: 1,
  [GUARD]: 2,
  [GUARD_PASS]: 3,
  [AFTER_PASS]: 4,
};

export const TECH_CAT_MAP = {
  [NONE]: { ID: NONE, KOR: "구분 없음", ENG: "None", TITLE: "NONE" },
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
};
