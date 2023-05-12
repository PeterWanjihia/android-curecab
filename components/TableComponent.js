import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { Table, Row } from "react-native-table-component";
import { colors } from "../assets/colors";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const TableComponent = () => {
  const [loading, setLoading] = useState(true);
  const { orders } = useSelector((store) => store.orders);
  const tableTitles = ["Date", "Order ID", "Delivery fee", "Status"];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
                key={order.orderId}
                data={[
                  DateComp(order.orderDate),
                  OrderIdComp(order.orderId),
                  PriceComp(order.deliveryFee),
                  StatusComp(order.status),
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
      {dayjs(date).format("DD/MM/YYYY")}
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
      Ksh <Text style={{ fontFamily: "Bold" }}>{price}</Text>
    </Text>
  );
};

const StatusComp = (status) => {
  const all = {
    delivered: { bg: "#FCF4C7", color: "#854E23" },
    pending: { bg: "#C8F7DF", color: "#559982" },
    failed: { bg: "#F8EAE9", color: "#752E32" },
  };

  const getBg = (status) => {
    if (status === "pending") return all.pending.bg;
    if (status === "failed") return all.failed.bg;
    return all.delivered.bg;
  };

  const getColor = (status) => {
    if (status === "pending") return all.pending.color;
    if (status === "failed") return all.failed.color;
    return all.delivered.color;
  };
  return (
    <Text
      style={{
        textAlign: "center",
        fontFamily: "Regular",
        backgroundColor: getBg(status),
        color: getColor(status),
        borderRadius: 20,
        marginHorizontal: 10,
        paddingVertical: 3,
        fontSize: 12,
      }}
    >
      {status}
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
