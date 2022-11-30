import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import profileImg from "../../assets/images/profile.png";
import { theme } from "../../theme";
import {
  getUserProfileAndName,
  USER_NAME_ERROR,
} from "../../utils/async-storage-fn";

export default function TechProfile({ navigation }) {
  const defaultUser = {
    profile: profileImg,
    userName: USER_NAME_ERROR,
  };
  const [user, setUser] = useState(defaultUser);
  useFocusEffect(
    useCallback(() => {
      checkUser();
      return () => {};
    }, [])
  );
  const checkUser = async () => {
    const storedUser = await getUserProfileAndName();
    if (!storedUser) {
      return setUser(defaultUser);
    }
    setUser(storedUser);
  };
  return (
    <View style={styles.profileContainer}>
      <Image style={styles.profileImg} source={user.profile} />
      <Text style={styles.title}>
        {user.userName === USER_NAME_ERROR
          ? user.userName
          : `${user.userName}'s Technique Tree`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: "center",
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 50,
  },
  title: {
    marginTop: 5,
    color: theme.white,
    fontSize: 18,
    fontWeight: "500",
  },
});
