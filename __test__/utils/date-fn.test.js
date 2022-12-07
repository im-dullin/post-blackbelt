import { dateFormatter } from "../../src/utils/date-fn";

test("YYYY-MM-DD 형식 문자열로 Date object를 변환", () => {
  const dateObj = new Date(2022, 1, 1); // month starts with 0
  expect(dateFormatter(dateObj)).toBe("2022-02-01");
});
