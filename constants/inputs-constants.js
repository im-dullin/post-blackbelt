import { themeBelt } from "../theme";

export const INPUT_TITLE = {
  NAME: "이름",
  TEAM: "소속",
  START_DATE: "주짓수 시작일",
  BELT_COLOR: "벨트 색상",
  BELT_GRAU: "그라우",
  PROMOTION_DATE: "최근 승급일",
  YEARLY_GOAL: "올해의 목표",
  MONTHLY_GOAL: "이 달의 목표",
};
export const INPUT_ERROR_MSG = {
  NAME: "공백 포함 1-20 자",
  TEAM: "공백 포함 1-20 자",
  START_DATE: "날짜를 선택하세요",
  BELT_COLOR: "색상을 선택하세요",
  BELT_GRAU: "숫자를 선택하세요",
  PROMOTION_DATE: "날짜를 선택하세요",
  YEARLY_GOAL: "공백 포함 1-40 자",
  MONTHLY_GOAL: "공백 포함 1-40 자",
};

export const BELT_COLOR_KEY = ["WHITE", "BLUE", "PURPLE", "BROWN", "BLACK"];
export const BELT_COLOR = {
  WHITE: {
    KOR: "화이트",
    BELT_COLOR: themeBelt.white,
    RANKBAR_COLOR: themeBelt.black,
  },
  BLUE: {
    KOR: "블루",
    BELT_COLOR: themeBelt.blue,
    RANKBAR_COLOR: themeBelt.black,
  },
  PURPLE: {
    KOR: "퍼플",
    BELT_COLOR: themeBelt.purple,
    RANKBAR_COLOR: themeBelt.black,
  },
  BROWN: {
    KOR: "브라운",
    BELT_COLOR: themeBelt.brown,
    RANKBAR_COLOR: themeBelt.black,
  },
  BLACK: {
    KOR: "블랙",
    BELT_COLOR: themeBelt.black,
    RANKBAR_COLOR: themeBelt.red,
  },
};

export const BELT_GRAU_KEY = ["0", "1", "2", "3", "4"];
