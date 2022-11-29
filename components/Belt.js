import { StyleSheet, Text, View } from "react-native";
import { theme } from "../theme";

export default function Belt() {
  const belt = {
    color: theme.black,
    rankBar: theme.red,
    grau: 3,
    promotionDay: "2000.00.00",
  };

  const grauArr = Array(belt.grau).fill(0);

  return (
    <>
      <View style={{ ...styles.beltBackground, backgroundColor: belt.color }}>
        <View
          style={{
            ...styles.rankBar,
            backgroundColor: belt.rankBar,
          }}
        >
          {grauArr.map((v, i) => {
            return <View key={i} style={styles.grau}></View>;
          })}
        </View>
      </View>
      <Text
        style={{
          ...styles.promotionDayText,
          color: theme.grey,
        }}
      >
        최근 승급일: {belt.promotionDay}
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
