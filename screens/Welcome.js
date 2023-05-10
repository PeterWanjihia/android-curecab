import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Navbar from "../components/Navbar";
import TableComponent from "../components/TableComponent";
import { colors } from "../assets/colors";
import FeedBack from "../components/FeedBack";

const Welcome = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate("Order");
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Navbar />

      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 10 }}>
        <View>
          <Text
            style={{ fontFamily: "Bold", color: colors.lblack, fontSize: 20 }}
          >
            Welcome,
          </Text>
          <Text style={{ fontFamily: "Bold", fontSize: 30, marginVertical: 5 }}>
            John Doe
          </Text>
          <Text style={{ fontFamily: "Regular", color: colors.lblack }}>
            You can now request a new order and we'll get it delivered to you.
          </Text>

          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.6}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Make an order</Text>
          </TouchableOpacity>
        </View>

        <TableComponent />

        <FeedBack />
      </ScrollView>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.red,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    height: 50,
    marginTop: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: 15,
    fontFamily: "Bold",
  },
});
