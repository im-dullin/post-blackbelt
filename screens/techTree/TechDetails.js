import { useNavigationState } from "@react-navigation/native";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DiaryBrief from "../../components/DairyBrief";
import TechProfile from "../../components/TechProfile";
import { theme } from "../../theme";
export default function TechDetails({ navigation }) {
  const techTitle = navigation.getState().routes[1].params.techTitle;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => navigation.navigate("Tech Tree")}
      >
        <TechProfile />
      </TouchableOpacity>
      <View style={styles.techContainer}>
        <Text
          style={{ ...styles.title, color: theme[techTitle.toLowerCase()] }}
        >
          {techTitle}
        </Text>
        <View>
          {/* https://github.com/react-native-svg/react-native-svg/blob/main/USAGE.md: Marker */}
        </View>
      </View>
      <SafeAreaView style={{ flex: 2.5 }}>
        <ScrollView
          vertical={true}
          alwaysBounceVertical
          showsVerticalScrollIndicator
          contentContainerStyle={styles.diarysContainer}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((v) => {
            return <DiaryBrief key={v} style={{ flex: 1 }} />;
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: theme.black,
  },
  techContainer: {
    flex: 2.5,
  },
  diarysContainer: {},
  title: {
    fontSize: 32,
    fontWeight: "800",
    // textShadowColor: theme.purple,
    // textShadowRadius: 5,
  },
});
