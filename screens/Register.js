import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import * as Icons from "react-native-vector-icons";
import Toast from "react-native-toast-message";
import { colors } from "../assets/colors";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/AuthSlice";
import { patients } from "../data";

function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [ccc, setCcc] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [foundUser, setFoundUser] = useState(null);

  const dispatch = useDispatch();

  const handleRegister = ({ navigation }) => {
    if (!phone || !password)
      return Toast.show({
        type: "error",
        text1: "Error",
        text2: "All fields are required.",
      });

    if (password.length < 6)
      return Toast.show({
        type: "error",
        text1: "Error",
        text2: "Password must be 6 or more characters.",
      });

    setLoading(true);
    setTimeout(() => {
      const user = patients.find((p) => p.phone === phone);
      if (!user)
        return Toast.show({
          type: "error",
          text1: "Error",
          text2: "Invalid credentials.",
        });

      const passwordMatch = password === user.password;
      if (!passwordMatch)
        return Toast.show({
          type: "error",
          text1: "Error",
          text2: "Invalid credentials.",
        });

      dispatch(setUser(user));
      setLoading(false);

      return Toast.show({
        type: "success",
        text1: "Success",
        text2: "You are now logged in.",
      });
    }, 1000);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.screen}
    >
      <Pressable
        style={{ position: "absolute", left: 10, top: 10 }}
        onPress={() => navigation.goBack()}
      >
        <Icons.MaterialCommunityIcons
          color={colors.black}
          name="arrow-left-top"
          size={30}
        />
      </Pressable>
      <View style={styles.header}>
        <Text style={{ fontFamily: "Bold", fontSize: 20 }}>
          Sign up to continue
        </Text>
      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={{ fontFamily: "Bold", fontSize: 16 }}>Username</Text>
        <TextInput
          value={username}
          onChangeText={(value) => setUsername(value.trim())}
          style={styles.input}
          placeholder="Enter username"
        />
      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={{ fontFamily: "Bold", fontSize: 16 }}>Phone number</Text>
        <TextInput
          value={phone}
          onChangeText={(value) => setPhone(value.trim())}
          style={styles.input}
          placeholder="+254 * * * * * * *"
        />
      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={{ fontFamily: "Bold", fontSize: 16 }}>CCC number</Text>
        <TextInput
          value={ccc}
          onChangeText={(value) => setCcc(value.trim())}
          style={styles.input}
          placeholder="Enter your ccc number"
        />
      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={{ fontFamily: "Bold", fontSize: 16 }}>Password</Text>
        <TextInput
          value={password}
          onChangeText={(value) => setPassword(value.trim())}
          style={styles.input}
          placeholder="password"
        />
      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={{ fontFamily: "Bold", fontSize: 16 }}>
          Confirm Password
        </Text>
        <TextInput
          value={cpassword}
          onChangeText={(value) => setCpassword(value.trim())}
          style={styles.input}
          placeholder="Confirm password"
        />
      </View>

      <TouchableOpacity
        onPress={handleRegister}
        activeOpacity={0.85}
        style={styles.button}
      >
        {loading ? (
          <ActivityIndicator color={colors.white} size={30} />
        ) : (
          <Text style={{ fontFamily: "Bold", fontSize: 18, color: "white" }}>
            Register
          </Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Register;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    padding: 10,
    flex: 1,
    flexDirection: "column",
    paddingTop: 40,
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
