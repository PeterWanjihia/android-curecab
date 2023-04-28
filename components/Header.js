import { View, Text, Pressable } from "react-native";
import React from "react";
import { bold, regular } from "../utils";

const Header = ({ scrollP }) => {
  return (
    <View
      className={`bg-white flex items-center flex-row justify-between p-4 pt-6 ${
        scrollP >= 200 && "pt-6 border-bcolor border-b-[.6px]"
      }`}
    >
      <Text className="text-4xl text-dark text-red font-reg" style={bold}>
        ARVOME
      </Text>
      <Text className="text-red text-lblack text-lg" style={regular}>
        About
      </Text>
    </View>
  );
};

export default Header;
