import { StyleSheet, Text, View } from "react-native";
import { BELT_COLOR_MAP } from "../../constants/inputs-constants";
import { theme } from "../../theme";

export default function Belt({ beltColor, beltGrau, promotionDate }) {
  const grauArr = Array(parseInt(beltGrau, 10)).fill(0);

  return (
    <>
      <View
        style={{
          ...styles.beltBackground,
          backgroundColor: BELT_COLOR_MAP[beltColor].BELT_COLOR,
        }}
      >
        <View
          style={{
            ...styles.rankBar,
            backgroundColor: BELT_COLOR_MAP[beltColor].RANKBAR_COLOR,
          }}
        >
          {grauArr.map((v, i) => {
            return <View key={i} style={styles.grau} />;
          })}
        </View>
      </View>
      <Text
        style={{
          ...styles.promotionDayText,
          color: theme.grey,
        }}
      >
        최근 승급일: {promotionDate}
      </Text>
    </>
  );
}
const styles = StyleSheet.create({
  beltBackground: {
    width: 250,
    height: 30,
    alignItems: "flex-end",
  },
  rankBar: {
    width: 90,
    height: 30,
    marginEnd: 30,
    flexDirection: "row",
  },
  grau: {
    width: 10,
    height: 30,
    marginLeft: 8,
    backgroundColor: theme.white,
  },
  promotionDayText: {
    fontSize: 11,
    position: "absolute",
    bottom: -17,
    right: 0,
  },
});
