import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { memo } from "react";
import { colors } from "../utils";

const Footer = ({ onPress }) => {
  return (
    <View style={styles.screen}>
      <Text style={[styles.text, { fontFamily: "Bold", fontSize: 25 }]}>
        Convenient ARV Delivery
      </Text>
      <Text
        style={[
          styles.text,
          { fontFamily: "Regular", fontSize: 14, marginVertical: 25 },
        ]}
      >
        Enjoy the convenience of ARV Delivery Order your drugs now and have them
        delivered to your home!
      </Text>

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={{
          backgroundColor: colors.red,
          borderRadius: 70,
          width: "80%",
          height: 50,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Bold",
            color: "white",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          Make a request
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(Footer);

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "black",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 400,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
