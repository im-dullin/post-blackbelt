export const STANDING = "STANDING";
export const GUARD = "GUARD";
export const GUARD_PASS = "GUARD_PASS";
// export const AFTER_PASS = "AFTER_PASS";
export const SIDE = "SIDE";
export const MOUNT = "MOUNT";
export const BACK = "BACK";
export const SUBMISSON = "SUBMISSON";
export const DRILL = "DRILL";

export const ETC = "ETC";

export const TECH_CAT = [
  {
    ID: STANDING,
    KOR: "스탠딩",
    ENG: "Standing",
    TITLE: "STANDING",
    INDEX: 0,
  },
  { ID: GUARD, KOR: "가드", ENG: "Guard", TITLE: "GUARD", INDEX: 1 },
  {
    ID: GUARD_PASS,
    KOR: "가드 패스",
    ENG: "Guard Pass",
    TITLE: "GUARD PASS",
    INDEX: 2,
  },
  {
    ID: SIDE,
    KOR: "사이드",
    ENG: "Side",
    TITLE: "SIDE POSITION",
    INDEX: 3,
  },
  {
    ID: MOUNT,
    KOR: "마운트",
    ENG: "Mount",
    TITLE: "MOUNT POSITON",
    INDEX: 4,
  },
  {
    ID: BACK,
    KOR: "백",
    ENG: "Back",
    TITLE: "BACK POSITION",
    INDEX: 5,
  },
  {
    ID: SUBMISSON,
    KOR: "서브미션",
    ENG: "Submission",
    TITLE: "SUBMISSION",
    INDEX: 6,
  },
  { ID: ETC, KOR: "기타", ENG: "Etc.", TITLE: "Etc.", INDEX: 7 },
];

export const TECH_CAT_IDX = {
  [STANDING]: 0,
  [GUARD]: 1,
  [GUARD_PASS]: 2,
  [SIDE]: 3,
  [MOUNT]: 4,
  [BACK]: 5,
  [SUBMISSON]: 6,
  [ETC]: 7,
};

export const TECH_CAT_MAP = {
  [STANDING]: {
    ID: STANDING,
    KOR: "스탠딩",
    ENG: "Standing",
    TITLE: "STANDING",
    INDEX: 0,
  },
  [GUARD]: { ID: GUARD, KOR: "가드", ENG: "Guard", TITLE: "GUARD", INDEX: 1 },
  [GUARD_PASS]: {
    ID: GUARD_PASS,
    KOR: "가드 패스",
    ENG: "Guard Pass",
    TITLE: "GUARD PASS",
    INDEX: 2,
  },
  [SIDE]: {
    ID: SIDE,
    KOR: "사이드",
    ENG: "Side",
    TITLE: "SIDE POSITION",
    INDEX: 3,
  },
  [MOUNT]: {
    ID: MOUNT,
    KOR: "마운트",
    ENG: "Mount",
    TITLE: "MOUNT POSITON",
    INDEX: 4,
  },
  [BACK]: {
    ID: BACK,
    KOR: "백",
    ENG: "Back",
    TITLE: "BACK POSITION",
    INDEX: 5,
  },
  [SUBMISSON]: {
    ID: SUBMISSON,
    KOR: "서브미션",
    ENG: "Submission",
    TITLE: "SUBMISSION",
    INDEX: 6,
  },
  [ETC]: { ID: ETC, KOR: "기타", ENG: "Etc.", TITLE: "Etc.", INDEX: 7 },
};

// 스탠딩, 이스케입, 빽, 하체, 드릴, 서브미션
