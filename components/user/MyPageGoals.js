import { StyleSheet, View, Text } from "react-native";
import {
  MONTHLY_GOAL,
  YEARLY_GOAL,
} from "../../constants/user-inputs-constants";
import { theme } from "../../theme";

export default function MyPageGoals({ user }) {
  return (
    <>
      <View style={styles.goal}>
        <Text style={styles.title}>올해의 목표</Text>
        <Text>{user[YEARLY_GOAL]}</Text>
      </View>
      <View style={styles.goal}>
        <Text style={styles.title}>이 달의 목표</Text>
        <Text>{user[MONTHLY_GOAL]}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  goal: {
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    color: theme.grey,
    fontSize: 12,
  },
});
