import { View, Text, TouchableOpacity, Modal } from "react-native";
import React from "react";
import { bold, regular } from "../utils";

const Footer = ({ setshowLoginModal }) => {
  return (
    <View className="p-4 bg-black h-[400px] flex justify-center items-center">
      <Text style={bold} className="text-white text-3xl text-center">
        Convenient ARV Delivery
      </Text>
      <Text style={regular} className="text-white text-center my-4">
        Enjoy the convenience of ARV Delivery Order your drugs now and have them
        delivered to your home!
      </Text>

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setshowLoginModal(true)}
        className="bg-red py-3 rounded-full w-full"
      >
        <Text style={bold} className="text-white text-center text-lg">
          Make a request
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
