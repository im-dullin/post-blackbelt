import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DiaryBrief from "../../components/diary/DairyBrief";
import { SCREEN_NAME } from "../../constants/screen-constants";
import { theme } from "../../theme";

export default function TechDetail({ navigation }) {
  const { techTitle } = navigation.getState().routes[1].params;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.TitleContainer}
        onPress={() => navigation.navigate(SCREEN_NAME.TECH_TREE)}
      >
        <MaterialCommunityIcons
          name="chevron-left"
          size={50}
          color={theme[techTitle.toLowerCase()]}
          style={styles.backIcon}
        />
        <Text
          style={{ ...styles.title, color: theme[techTitle.toLowerCase()] }}
        >
          {techTitle}
        </Text>
        {/* <TechProfile /> */}
      </TouchableOpacity>

      {/* https://github.com/react-native-svg/react-native-svg/blob/main/USAGE.md: Marker */}

      <SafeAreaView style={styles.scrollContainer}>
        <ScrollView
          vertical
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
    backgroundColor: theme.black,
  },
  TitleContainer: {
    flex: 1,
    marginTop: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: { position: "absolute", left: 10 },
  scrollContainer: { flex: 12 },
  diarysContainer: {},
  title: {
    fontSize: 32,
    fontWeight: "800",
    // textShadowColor: theme.purple,
    // textShadowRadius: 5,
  },
});
