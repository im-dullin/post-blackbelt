export const STANDING = "STANDING";
export const GUARD = "GUARD";
export const GUARD_PASS = "GUARD PASS";
export const AFTER_PASS = "AFTER PASS";
export const NONE = "NONE ";

export const TECH_CAT = [
  { ID: NONE, KOR: "구분 없음", ENG: "None" },
  { ID: STANDING, KOR: "스탠딩", ENG: "Standing" },
  { ID: GUARD, KOR: "가드", ENG: "Guard" },
  { ID: GUARD_PASS, KOR: "가드 패스", ENG: "Guard Pass" },
  { ID: AFTER_PASS, KOR: "패스 이후", ENG: "After Pass" },
];

export const TECH_CAT_IDX = {
  NONE: 0,
  STANDING: 1,
  GUARD: 2,
  GUARD_PASS: 3,
  AFTER_PASS: 4,
};
