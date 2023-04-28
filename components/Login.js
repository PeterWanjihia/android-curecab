import React from "react";
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Icons from "react-native-vector-icons";
import { bold, regular } from "../utils";

function Login({ setshowLoginModal, navigation }) {
  const login =  () => {
    setshowLoginModal(false);
    navigation.push("Welcome");
  };
  return (
    <View className="bg-[#00000029] flex-1 flex justify-center px-3">
      <View className="bg-white p-4">
        <View className="flex-row items-center">
          <Text className="mx-auto text-2xl" style={bold}>
            Login
          </Text>
          <Pressable
            className="absolute right-0"
            onPress={() => setshowLoginModal(false)}
          >
            <Icons.Feather className="text-3xl text-red" name="x" size={40} />
          </Pressable>
        </View>
        <View className="mt-3">
          <Text style={bold}>Unique Patient identifier (UPI)</Text>
          <TextInput
            className="bg-input p-2 mt-2 text-lblack"
            style={regular}
            placeholder="Your UPI"
          />
        </View>
        <View className="mt-3">
          <Text style={bold}>Password</Text>
          <TextInput
            className="bg-input p-2 mt-2 text-lblack"
            style={regular}
            placeholder="password"
          />
        </View>
        <TouchableOpacity
          onPress={login}
          activeStyle={0.7}
          className="mt-3 bg-red h-[50px] mt-6 rounded-md items-center justify-center"
        >
          <Text className="text-xl text-white" style={bold}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
