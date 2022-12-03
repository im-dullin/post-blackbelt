import { Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import {
  AFTER_PASS,
  GUARD,
  GUARD_PASS,
  STANDING,
} from "../constants/tech-category-constants";
import { theme } from "../theme";

export default function TechPieChart() {
  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(93,75,156, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.4,
    useShadowColorFromDataset: false, // optional
  };
  const data = [
    {
      name: "standing",
      diaryCount: 3,
      color: theme[STANDING],
      legendFontColor: theme.grey,
      legendFontSize: 15,
    },
    {
      name: "guard",
      diaryCount: 10,
      color: theme[GUARD],
      legendFontColor: theme.grey,
      legendFontSize: 15,
    },
    {
      name: "guard pass",
      diaryCount: 21,
      color: theme[GUARD_PASS],
      legendFontColor: theme.grey,
      legendFontSize: 15,
    },
    {
      name: "after pass",
      diaryCount: 5,
      color: theme[AFTER_PASS],
      legendFontColor: theme.grey,
      legendFontSize: 15,
    },
  ];

  return (
    <PieChart
      data={data}
      width={screenWidth * 0.8}
      height={200}
      chartConfig={chartConfig}
      accessor="diaryCount"
      backgroundColor="transparent"
      paddingLeft="5"
      center={[5, 0]}
      absolute
    />
  );
}
