import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useCallback, useState } from "react";
import * as Icons from "react-native-vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { colors } from "../assets/colors";
import DropDown from "../components/DropDown";
import dayjs from "dayjs";

const Order = ({ navigation }) => {
  const [value, setValue] = useState(null);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [county, setCounty] = useState("");
  const [constituency, setConstituency] = useState("");
  const [ward, setWard] = useState("");
  const [clinic, setClinic] = useState("");
  const [courier, setCourier] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryDate, setdDeliveryDate] = useState("");
  const [counties, setCounties] = useState([]);
  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
  ];

  const onChangeTime = useCallback((time) => {
    setShow(false);
    setDate(time.nativeEvent.timestamp);
  }, []);

  return (
    <KeyboardAvoidingView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.bold}>Make an order.</Text>
        <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
          <Icons.Ionicons name="ios-arrow-back" size={25} />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 10 }}>
        {/* county select */}
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.label}>County</Text>
          <DropDown
            data={data}
            title="Select county"
            setValue={setValue}
            value={county}
            onChange={(value) => setCounty(value)}
          />
        </View>

        {/* constituency select */}
        {county ? (
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.label}>Constituency</Text>
            <DropDown
              data={data}
              title="Select constituency"
              setValue={setValue}
              value={constituency}
              onChange={(value) => setConstituency(value)}
            />
          </View>
        ) : null}

        {/* ward select */}
        {constituency ? (
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.label}>Ward</Text>
            <DropDown
              data={data}
              title="Select ward"
              setValue={setValue}
              value={ward}
              onChange={(value) => setWard(value)}
            />
          </View>
        ) : null}

        {/* select clinic */}
        {ward ? (
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.label}>Clinic</Text>
            <DropDown
              data={data}
              title="Select clinic"
              setValue={setValue}
              value={clinic}
              onChange={(value) => setClinic(value)}
            />
          </View>
        ) : null}

        {/* courier select */}
        {clinic ? (
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.label}>Courier</Text>
            <DropDown
              data={data}
              title="Select courier"
              setValue={setValue}
              value={courier}
              onChange={(value) => setCourier(value)}
            />
          </View>
        ) : null}

        {/* delivery address  */}
        <View style={{ marginBottom: 10 }}>
          <Text style={{ marginBottom: 3 }}>Delivery Address</Text>
          <TextInput style={styles.input} placeholder="1234 Example" />
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
              Change -- {dayjs(date).format("DD/MM/YYYY")} --
            </Text>
            <Icons.Entypo
              color={colors.lblack}
              name="chevron-small-down"
              size={25}
            />
          </TouchableOpacity>
        </View>
        {show ? (
          <DateTimePicker
            value={new Date(date)}
            onChange={(value) => onChangeTime(value)}
            minimumDate={new Date()}
          />
        ) : null}

        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <Text style={styles.buttonText}>Order now</Text>
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
