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
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const Welcome = ({ navigation }) => {
  const { user } = useSelector((store) => store.auth);
  const canOrder = user.next_order < new Date().getTime();

  const onPress = () => {
    navigation.navigate("Order");
  };

  const Greetings = () => {
    let today = new Date();
    let hourNow = today.getHours();

    if (hourNow >= 0 && hourNow < 12) return "Good morning";
    if (hourNow >= 12 && hourNow < 18) return "Good afternoon";
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Navbar />

      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 10 }}>
        <View>
          <Text
            style={{ fontFamily: "Bold", color: colors.lblack, fontSize: 20 }}
          >
            {Greetings()},
          </Text>
          <Text style={{ fontFamily: "Bold", fontSize: 30, marginVertical: 5 }}>
            John Doe
          </Text>
          {canOrder ? (
            <>
              <Text style={{ fontFamily: "Regular", color: colors.lblack }}>
                You can now request a new order and we'll get it delivered to
                you.
              </Text>

              <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.6}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Make an order</Text>
              </TouchableOpacity>
            </>
          ) : (
            <Text
              style={{
                padding: 5,
                textAlign: "center",
                fontFamily: "Regular",
                color: "#752E32",
                backgroundColor: "#F8EAE9",
                fontSize: 16,
                borderRadius: 5,
              }}
            >
              You will be able to make your next order from{" "}
              {dayjs(user.next_order).format("DD/MM/YYYY HH:mm")}.
            </Text>
          )}
        </View>

        <TableComponent />
        {/* 
        <FeedBack /> */}
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
