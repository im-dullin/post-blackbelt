import { StyleSheet, View, Text } from "react-native";
import { MONTHLY_GOAL, YEARLY_GOAL } from "../../constants/inputs-constants";

export default function MyPageGoals({ user }) {
  return (
    <>
      <View style={styles.goal}>
        <Text>올해의 목표</Text>
        <Text>{user[YEARLY_GOAL]}</Text>
      </View>
      <View style={styles.goal}>
        <Text>이 달의 목표</Text>
        <Text>{user[MONTHLY_GOAL]}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  goal: {
    alignItems: "center",
  },
});
