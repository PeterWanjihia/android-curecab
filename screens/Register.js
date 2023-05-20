import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
  KeyboardAvoidingView,
} from "react-native";
import * as Icons from "react-native-vector-icons";
import Toast from "react-native-toast-message";
import { colors } from "../assets/colors";
import { useState } from "react";
import { EMR_patients, patients } from "../data";

function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [ccc, setCcc] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [foundUser, setFoundUser] = useState(null);
  const [idModal, setIdModal] = useState(null);
  const [id, setId] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleRegister = () => {
    if (!username || !phone || !ccc || !password || !cpassword)
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

    if (password !== cpassword)
      return Toast.show({
        type: "error",
        text1: "Error",
        text2: "Passwords don't match.",
      });

    setLoading(true);
    setTimeout(() => {
      const user = EMR_patients.find((p) => p.ccc_no === ccc);
      if (!user) {
        setLoading(false);
        return Toast.show({
          type: "error",
          text1: "Error",
          text2: "Invalid CCC number.",
        });
      } else {
        setFoundUser(user);
        setVisible(true);
      }
      setLoading(false);
    }, 1000);
  };

  const handleAccept = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setFoundUser(null);
      setVisible(false);

      // send a message to their

      navigation.navigate("Login");
      return Toast.show({
        type: "success",
        text1: "Success",
        text2: "Your registration was successfull. Continue to login.",
      });
    }, 1000);
  };

  const handleReject = (e) => {
    e.preventDefault();
    setFoundUser(null);
    setVisible(false);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.screen}
    >
      <KeyboardAvoidingView>
        <Pressable onPress={() => navigation.goBack()}>
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
            secureTextEntry
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
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          onPress={handleRegister}
          activeOpacity={0.85}
          style={styles.button}
        >
          {!foundUser && loading ? (
            <ActivityIndicator color={colors.white} size={30} />
          ) : (
            <Text style={{ fontFamily: "Bold", fontSize: 18, color: "white" }}>
              Register
            </Text>
          )}
        </TouchableOpacity>

        <Modal transparent visible={visible}>
          <View style={styles.modal}>
            <View style={styles.modalView}>
              <Text style={styles.prompt}>
                Is your name{" "}
                <Text style={{ fontFamily: "Bold", fontSize: 18 }}>
                  {foundUser?.full_name}
                </Text>{" "}
                with CCC number{" "}
                <Text style={{ fontFamily: "Bold", fontSize: 18 }}>
                  {foundUser?.ccc_no}
                </Text>
              </Text>

              <View style={styles.buttons}>
                <Pressable
                  onPress={handleReject}
                  style={[styles.modalBtn, { backgroundColor: colors.red }]}
                >
                  <Text
                    style={{ fontSize: 20, fontFamily: "Bold", color: "white" }}
                  >
                    NO
                  </Text>
                </Pressable>
                <Pressable
                  onPress={handleAccept}
                  style={[styles.modalBtn, { backgroundColor: colors.green }]}
                >
                  <Text
                    style={{ fontSize: 20, fontFamily: "Bold", color: "white" }}
                  >
                    {foundUser && loading ? (
                      <ActivityIndicator color={colors.white} size={30} />
                    ) : (
                      <Text
                        style={{
                          fontFamily: "Bold",
                          fontSize: 18,
                          color: "white",
                        }}
                      >
                        NO
                      </Text>
                    )}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default Register;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    padding: 10,
    flexDirection: "column",
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
  modalBtn: {
    height: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 15,
  },
  prompt: {
    fontSize: 16,
    fontFamily: "Regular",
    textAlign: "center",
    color: colors.lblack,
  },
  modal: {
    flex: 1,
    backgroundColor: "#00000019",
    justifyContent: "center",
  },
  modalView: {
    backgroundColor: colors.white,
    marginHorizontal: 5,
    padding: 10,
  },
});
