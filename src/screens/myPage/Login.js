import { Button, StyleSheet, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useEffect, useState } from "react";
import { SCREEN_NAME } from "../../constants/screen-constants";

WebBrowser.maybeCompleteAuthSession();
export default function Login({ navigation }) {
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();
  const [message, setMessage] = useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "1062870118610-kgh9jriort4254bqtdi5qucmt6skm3aa.apps.googleusercontent.com",
    webClientId:
      "1062870118610-kgh9jriort4254bqtdi5qucmt6skm3aa.apps.googleusercontent.com",
    androidClientId:
      "1062870118610-li6vrpv4gi2v2t3916olsgjk4q5ulndd.apps.googleusercontent.com",
    iosClientId:
      "1062870118610-47968dn4qtpb0ienomn7i8fn698qa111.apps.googleusercontent.com",
  });

  useEffect(() => {
    setMessage(JSON.stringify(response));
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  async function getUserData() {
    // let userInfoResponse = await fetch(
    //   Linking.openURL("url"),
    //   {
    //     headers: { Authorization: `Bearer ${accessToken}` },
    //   }
    // );
    // userInfoResponse.json().then((data) => {
    //   setUserInfo(data);
    // });
  }

  function showUserInfo() {
    if (userInfo) {
      return (
        <View style={styles.userInfo}>
          <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
          <Text>Welcome {userInfo.name}</Text>
          <Text>{userInfo.email}</Text>
        </View>
      );
    }
  }
  //   const techTitle = navigation.getState().routes[1].params.techTitle;
  return (
    <View style={styles.container}>
      <Button
        style={{ flex: 1 }}
        onPress={() => navigation.navigate(SCREEN_NAME.MY_PAGE)}
        title="To Mypage"
      />
      {showUserInfo()}
      <Button
        title={accessToken ? "" : "Login"}
        onPress={
          accessToken
            ? getUserData
            : async () => {
                await promptAsync();
              }
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  userInfo: {
    alignItems: "center",
    justifyContent: "center",
  },
  profilePic: {
    width: 50,
    height: 50,
  },
});
