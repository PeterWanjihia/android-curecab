import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { bold } from "../utils";

const Navbar = ({ scrollP }) => {
  return (
    <View className="flex-row items-center justify-between p-3 py-5">
      <Text className="text-4xl text-dark text-red font-reg" style={bold}>
        ARVOME
      </Text>
      <TouchableOpacity activeOpacity={.6} className='h-[40px] border-red border-[.4px] px-8 items-center justify-center rounded-md'>
        <Text className='text-lblack' style={bold}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
