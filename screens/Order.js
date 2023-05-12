import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useCallback, useState } from "react";
import * as Icons from "react-native-vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { colors } from "../assets/colors";
import DropDown from "../components/DropDown";
import dayjs from "dayjs";
import Toast from "react-native-toast-message";
import { couriers, facilities, generateOrderId } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { updateOrders } from "../redux/features/OrderSlice";

const Order = ({ navigation }) => {
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const [facility, setFacility] = useState("");
  const [courier, setCourier] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryDate, setDeliveryDate] = useState(new Date());

  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  const onChangeTime = useCallback((time) => {
    setShow(false);
    setDeliveryDate(time.nativeEvent.timestamp);
  }, []);

  const handleSubmit = () => {
    if (!facility || !courier || !address || !deliveryDate) {
      return Toast.show({
        type: "error",
        text1: "Error",
        text2: "All input fields are required.",
      });
    }

    setLoading(true);
    setTimeout(() => {
      dispatch(
        updateOrders({
          facility,
          courier,
          deliveryFee: 400,
          orderId: generateOrderId(),
          deliverBy: new Date().getTime() + 60000000,
          address,
          client: user.phone,
          status: "pending",
        })
      );
      setLoading(false);
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Your order has been placed successfully.",
      });
      return navigation.navigate("Welcome");
    }, 1500);
  };

  return (
    <KeyboardAvoidingView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.bold}>Make an order.</Text>
        <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
          <Icons.Ionicons name="ios-arrow-back" size={25} />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 10 }}>
        {/* select facility */}
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.label}>Clinic</Text>
          <DropDown
            data={facilities.map((fc) => {
              return { label: fc.name, value: fc.name };
            })}
            title="Select clinic"
            setValue={setValue}
            value={facility}
            onChange={(value) => setFacility(value)}
          />
        </View>

        {/* courier select */}
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.label}>Preffered Courier</Text>
          <DropDown
            data={couriers.map((co) => {
              return { label: co, value: co };
            })}
            title="Select courier"
            setValue={setValue}
            value={courier}
            onChange={(value) => setCourier(value)}
          />
        </View>

        {/* delivery address  */}
        <View style={{ marginBottom: 10 }}>
          <Text style={{ marginBottom: 3 }}>Delivery Address</Text>
          <TextInput
            value={address}
            onChangeText={(value) => setAddress(value)}
            style={styles.input}
            placeholder="1234 Example"
          />
        </View>

        {/* delivery date  */}
        <View>
          <Text style={styles.label}>Delivered by</Text>
          <TouchableOpacity
            onPress={() => setShow(true)}
            activeOpacity={0.9}
            style={styles.calendar}
          >
            <Text style={styles.calendarText}>
              Change -- {dayjs(deliveryDate).format("DD/MM/YYYY")} --
            </Text>
            <Icons.Entypo
              color={colors.lblack}
              name="chevron-small-down"
              size={25}
            />
          </TouchableOpacity>
        </View>

        {/* Date picker */}
        {show ? (
          <DateTimePicker
            value={new Date(deliveryDate)}
            onChange={(value) => onChangeTime(value)}
            minimumDate={new Date()}
          />
        ) : null}

        <TouchableOpacity
          onPress={handleSubmit}
          activeOpacity={0.7}
          style={styles.button}
        >
          {loading ? (
            <ActivityIndicator color={colors.white} size={30} />
          ) : (
            <Text style={{ fontFamily: "Bold", fontSize: 18, color: "white" }}>
              Order
            </Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Order;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0.25,
    borderBottomColor: colors.input,
    padding: 18,
  },
  bold: {
    fontFamily: "Bold",
    fontSize: 20,
  },
  goBack: {
    position: "absolute",
    left: 15,
  },
  label: {
    fontSize: 15,
    marginBottom: 3,
    fontFamily: "Regular",
  },
  input: {
    fontFamily: "Regular",
    backgroundColor: colors.input,
    height: 45,
    paddingHorizontal: 5,
    fontSize: 14,
    color: colors.lblack,
  },
  calendar: {
    backgroundColor: colors.input,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 3,
    justifyContent: "space-between",
    marginTop: 1,
  },
  calendarText: {
    fontFamily: "Regular",
    color: colors.lblack,
    fontSize: 14,
    paddingHorizontal: 5,
  },
  button: {
    backgroundColor: colors.red,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: "Bold",
    fontSize: 18,
    color: colors.white,
  },
});
