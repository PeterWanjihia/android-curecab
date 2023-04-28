import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { bold, regular } from "../utils";

const HeroSection = ({ setshowLoginModal }) => {
  return (
    <View className="bg-white p-4 h-[600px] flex flex-col justify-center">
      <View>
        <Text className="text-3xl mr-10 mb-5" style={bold}>
          Stay healthy with ARV delivery!
        </Text>
        <Text className="text-xl text-lblack" style={regular}>
          Take the hassle out of getting your ARV medications and have them
          delivered to you quickly and easily.
        </Text>

        <View className="flex flex-row gap-3 my-5">
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setshowLoginModal(true)}
            className="bg-red flex-1 rounded-full flex items-center py-3"
          >
            <Text className="text-white text-sm" style={bold}>
              Make a request
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#3F00FF] flex-1 rounded-full flex items-center py-3">
            <Text className="text-white text-sm" style={bold}>
              Book appointment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image
          source={require("../assets/medicines.png")}
          className="h-40 w-40 mx-auto mt-8"
        />
      </View>
    </View>
  );
};

export default HeroSection;
