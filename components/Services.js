import { View, Text } from "react-native";
import React from "react";
import * as Icons from "react-native-vector-icons";
import { bold, regular } from "../utils";

const Services = () => {
  const services = [
    {
      title: "Delivery Service",
      desc: "We provide a delivery service for ARV drugs, allowing patients to order their drugs at the comfort of their homes.",
    },
    {
      title: "Chatbot Service",
      desc: "We offer a chatbot service to answer any questions patients may have regarding their ARV drugs.",
    },
    {
      title: "Pay on delivery",
      desc: "We provide pay on delivery option for patients to pay for the delivery fee of their ARV drugs.",
    },
    {
      title: "Prescription Refill",
      desc: "We offer prescription refill services to ensure that patients get their ARV drugs on time.",
    },
  ];
  return (
    <View className="bg-[#F1F5FD] p-4">
      <Text className="mx-auto text-lg text-dark" style={bold}>
        ARV Delivery Services:
      </Text>
      <Text className="mx-auto text-lg text-dark" style={bold}>
        Unlocking the Power of Delivery.
      </Text>

      <View className="mt-5">
        {services.map((service) => (
          <View key={service.title} className="mt-5 bg-white p-4 z-100 rounded-md shadow-lg
            flex flex-col items-center text-center py-5">
            <Icons.Ionicons className='text-red' name="ios-checkmark-circle" size={30} />
            <Text className='text-center mt-3' style={bold}>{service.title}</Text>
            <Text className='text-center mt-3 text-lblack' style={regular}>{service.desc}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Services;
