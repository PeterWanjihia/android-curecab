import { View, Text, StyleSheet } from "react-native";
import { memo } from "react";
import * as Icons from "react-native-vector-icons";
import { colors } from "../utils";

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
    <View
      style={{ backgroundColor: "#F1F5FD", padding: 10, paddingVertical: 30 }}
    >
      <Text style={styles.logo}>ARV Delivery Services:</Text>
      <Text style={styles.logo}>Unlocking the Power of Delivery.</Text>

      <View style={{ marginTop: 10 }}>
        {services.map((service) => (
          <View key={service.title} style={styles.view}>
            <Icons.Ionicons
              color={colors.red}
              name="ios-checkmark-circle"
              size={30}
            />
            <Text style={[styles.text, { fontFamily: "Bold" }]}>
              {service.title}
            </Text>
            <Text style={[styles.text, { fontFamily: "Regular" }]}>
              {service.desc}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default memo(Services);

const styles = StyleSheet.create({
  logo: {
    textAlign: "center",
    fontFamily: "Bold",
    fontSize: 20,
  },
  view: {
    marginTop: 15,
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    paddingVertical: 20,
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    marginTop: 10,
  },
});
