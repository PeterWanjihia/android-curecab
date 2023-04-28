import { View, Text } from "react-native";
import React from "react";
import { bold, regular } from "../utils";

const About = () => {
  return (
    <View className='p-4 bg-white'>
      <Text className='mx-auto text-3xl' style={bold}>~ About us ~</Text>
      <Text className='my-5 text-center' style={regular}>
        Our app delivers affordable and reliable ARV pills to patients in
        need, regardless of their location or financial situation. Our dedicated
        team is passionate about improving healthcare outcomes, sourcing the
        highest quality medication and delivering it efficiently. We prioritize
        transparency, honesty and excellent customer service, and we're always
        available to help with any questions or concerns. Thank you for choosing
        us as your provider of life-saving medication.
      </Text>
    </View>
  );
};

export default About;
