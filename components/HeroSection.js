import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Alert,
} from "react-native";
import { memo } from "react";
import { colors } from "../utils";

const HeroSection = ({ onPress }) => {
  const navigate = () => {
    Linking.openURL("https://nishauritest.kenyahmis.org/login").catch((err) =>
      Alert.alert("There was an error! Please try again.")
    );
  };

  return (
    <View style={styles.screen}>
      <View>
        <Text
          style={{
            fontFamily: "Bold",
            fontSize: 25,
            marginRight: 15,
            marginBottom: 10,
          }}
        >
          Stay healthy with ARV delivery!
        </Text>
        <Text
          style={{
            fontFamily: "Regular",
            fontSize: 18,
            color: colors.lblack,
          }}
        >
          Take the hassle out of getting your ARV medications and have them
          delivered to you quickly and easily.
        </Text>

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginVertical: 20,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            style={[styles.button, { backgroundColor: colors.red }]}
          >
            <Text style={styles.buttonText}>Make a request</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={navigate}
            style={[styles.button, { backgroundColor: "#3F00FF" }]}
          >
            <Text style={styles.buttonText}>Book appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image
          source={require("../assets/medicines.png")}
          style={{
            alignSelf: "center",
            marginTop: 50,
            height: 160,
            width: 160,
          }}
        />
      </View>
    </View>
  );
};

export default memo(HeroSection);

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    padding: 15,
    height: 600,
    flexDirection: "column",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  buttonText: {
    fontFamily: "Bold",
    fontSize: 14,
    color: "white",
  },
});
