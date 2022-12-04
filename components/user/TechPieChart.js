import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { TECH_CAT } from "../../constants/tech-category-constants";
import { theme } from "../../theme";
import { getDiaryIdByTechCategory } from "../../utils/sql-db";

export default function TechPieChart() {
  const [dataArr, setDataArr] = useState([]);
  const [dataObj, setDataObj] = useState({});

  const [loading, setLoading] = useState(false);
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

  useFocusEffect(
    useCallback(() => {
      loadData();
      return () => {
        setDataObj({});
        setDataArr([]);
      };
    }, [])
  );

  useEffect(() => {
    if (Object.keys(dataObj).length === 5) {
      setDataArr(Object.values(dataObj));
      setLoading(true);
    }
  }, [dataObj]);

  const handleData = async (tech, tx, result) => {
    const diaryCount = result.rows._array.length;
    const techData = {
      name: tech.ENG,
      diaryCount,
      color: theme[tech.ID],
      legendFontColor: theme.grey,
      legendFontSize: 15,
    };

    setDataObj((prev) => {
      return {
        ...prev,
        [tech.ID]: techData,
      };
    });
  };

  const loadData = async () => {
    TECH_CAT.map(async (tech) => {
      getDiaryIdByTechCategory(tech.ID, handleData.bind(this, tech));
    });
  };

  return (
    <View>
      {!loading ? (
        <Text>Loading...</Text>
      ) : (
        <PieChart
          data={dataArr}
          width={screenWidth * 0.8}
          height={200}
          chartConfig={chartConfig}
          accessor="diaryCount"
          backgroundColor="transparent"
          paddingLeft="5"
          center={[5, 0]}
          absolute
        />
      )}
    </View>
  );
}
