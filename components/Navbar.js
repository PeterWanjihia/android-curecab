import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../utils";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.nav}>
      <Text style={{ fontFamily: "Bold", fontSize: 25, color: colors.red }}>
        CURECAB
      </Text>
      <Pressable onPress={() => navigation.goBack()} style={styles.button}>
        <Text
          style={{
            fontFamily: "Bold",
            paddingHorizontal: 20,
            color: colors.lblack,
          }}
        >
          Logout
        </Text>
      </Pressable>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  button: {
    height: 40,
    borderColor: colors.red,
    borderWidth: 0.7,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
  },
});
