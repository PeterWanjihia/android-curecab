import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import { Table, Row } from "react-native-table-component";
import { colors } from "../utils";

const TableComponent = () => {
  const [orders, setOrders] = useState([1, 2, 3, 4, 5, 6, 7]);
  const tableTitles = ["Date", "Order ID", "Delivery fee", "Status"];

  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontFamily: "Bold", marginBottom: 10, fontSize: 20 }}>
        Order history
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Table
          style={{ width: "100%", minWidth: 450 }}
          borderStyle={styles.borderStyle}
        >
          <Row
            data={tableTitles}
            textStyle={{
              fontFamily: "Bold",
              textAlign: "center",
              backgroundColor: "white",
            }}
            style={{ height: 35, backgroundColor: "#C8F7DF" }}
            widthArr={[125, 150, 100, 125]}
          />
          {orders?.map((order, i) => {
            return (
              <Row
                key={order}
                data={[
                  DateComp("23/3/2034"),
                  OrderIdComp("34f45grfeg45"),
                  PriceComp("3,410"),
                  StatusComp("Delivered", "deliv", i),
                ]}
                style={{ height: 35, backgroundColor: "white" }}
                widthArr={[125, 150, 100, 125]}
              />
            );
          })}
        </Table>
      </ScrollView>
    </View>
  );
};

export default TableComponent;

const DateComp = (date) => {
  return (
    <Text
      style={{
        textAlign: "center",
        fontFamily: "Regular",
        color: colors.lblack,
        fontSize: 13,
      }}
    >
      {date}
    </Text>
  );
};

const OrderIdComp = (orderId) => {
  return (
    <Text
      style={{
        textAlign: "center",
        fontFamily: "Regular",
        color: colors.lblack,
        fontSize: 13,
      }}
    >
      {orderId}
    </Text>
  );
};

const PriceComp = (price) => {
  return (
    <Text
      style={{
        textAlign: "center",
        fontFamily: "Regular",
        color: colors.lblack,
        fontSize: 13,
      }}
    >
      Ksh <Text>{price}</Text>
    </Text>
  );
};

const StatusComp = (value, status, i) => {
  const all = {
    delivered: { bg: "#FCF4C7", color: "#854E23" },
    pending: { bg: "#C8F7DF", color: "#559982" },
    failed: { bg: "#F8EAE9", color: "#752E32" },
  };
  return (
    <Text
      style={{
        textAlign: "center",
        fontFamily: "Regular",
        backgroundColor: i % 2 === 0 ? all.pending.bg : all.delivered.bg,
        color: i % 2 === 0 ? all.pending.color : all.delivered.color,
        borderRadius: 20,
        marginHorizontal: 10,
        paddingVertical: 3,
        fontSize: 12,
      }}
    >
      {i % 2 === 0 ? "Delivered" : "Pending"}
    </Text>
  );
};

const styles = StyleSheet.create({
  borderStyle: {
    borderWidth: 1,
    borderColor: colors.bcolor,
  },
  text: {
    textAlign: "center",
    fontFamily: "Regular",
    backgroundColor: "white",
  },
});
