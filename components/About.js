import { View, Text } from "react-native";
import { memo } from "react";

const About = () => {
  return (
    <View style={{ padding: 10, backgroundColor: "white" }}>
      <Text
        style={{
          fontFamily: "Bold",
          textAlign: "center",
          fontSize: 30,
        }}
      >
        ~ About us ~
      </Text>
      <Text
        style={{
          fontFamily: "Regular",
          marginHorizontal: 10,
          textAlign: "center",
          paddingVertical: 30,
        }}
      >
        Our app delivers affordable and reliable ARV pills to patients in need,
        regardless of their location or financial situation. Our dedicated team
        is passionate about improving healthcare outcomes, sourcing the highest
        quality medication and delivering it efficiently. We prioritize
        transparency, honesty and excellent customer service, and we're always
        available to help with any questions or concerns. Thank you for choosing
        us as your provider of life-saving medication.
      </Text>
    </View>
  );
};

export default memo(About);
