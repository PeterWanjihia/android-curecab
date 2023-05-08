import { View, Text, StyleSheet } from "react-native";
import { memo } from "react";
import { colors } from "../utils";

const Header = ({ scrollP }) => {
  return (
    <View
      style={[
        styles.header,
        { borderBottomColor: scrollP >= 200 ? colors.bcolor : "white" },
      ]}
    >
      <Text
        style={{
          fontFamily: "Bold",
          fontSize: 28,
          color: colors.red,
        }}
      >
        CURECAB
      </Text>
      <Text
        style={{ fontFamily: "Regular", color: colors.lblack, fontSize: 18 }}
      >
        About
      </Text>
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 0.5,
  },
});
