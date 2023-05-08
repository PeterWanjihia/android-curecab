import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Icons from "react-native-vector-icons";
import { colors } from "../utils";

function Login({ onPress, navigation }) {
  const login = () => {
    onPress();
    navigation.push("Welcome");
  };
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontFamily: "Bold", fontSize: 20 }}>Login</Text>
          <Pressable
            style={{ position: "absolute", right: 10 }}
            onPress={onPress}
          >
            <Icons.Feather color={colors.lblack} name="x" size={25} />
          </Pressable>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "Bold", fontSize: 16 }}>
            Unique Patient identifier (UPI)
          </Text>
          <TextInput style={styles.input} placeholder="Your UPI" />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "Bold", fontSize: 16 }}>Password</Text>
          <TextInput style={styles.input} placeholder="password" />
        </View>
        <TouchableOpacity
          onPress={login}
          activeOpacity={0.85}
          style={styles.button}
        >
          <Text style={{ fontFamily: "Bold", fontSize: 18, color: "white" }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    backgroundColor: "white",
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "70%",
    marginTop: "auto",
    elevation: 100,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    justifyContent: "center",
  },
  input: {
    fontFamily: "Regular",
    backgroundColor: colors.input,
    padding: 10,
    color: colors.lblack,
    marginTop: 5,
  },
  button: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.red,
    height: 50,
  },
});
