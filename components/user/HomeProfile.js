import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import profileImg from "../../assets/images/user.png";
import { theme } from "../../theme";
import {
  getUserProfileAndName,
  USER_NAME_ERROR,
} from "../../utils/async-storage-fn";

export default function HomeProfile() {
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
    <View id="profile" style={styles.profileContainer}>
      <Image style={styles.profileImg} source={user.profile} />
      <View style={{ alignContent: "center" }}>
        <Text style={styles.profileUserName}>{user.userName}</Text>
        <Text style={{ color: theme.grey }}>
          이번 달 00일 중 00일을 수련하셨습니다
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 0.9,
    flexDirection: "row",
    marginTop: 50,
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  profileUserName: {
    color: theme.black,
    fontSize: 22,
    fontWeight: "400",
    marginBottom: 5,
  },
});
