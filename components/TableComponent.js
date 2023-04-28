import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import { bold, regular } from "../utils";

const TableComponent = () => {
  const [orders, setOrders] = useState([1, 2, 3, 4, 5, 6, 7]);
  const tableTitles = ["Date", "Order ID", "Delivery fee", "Status"];

  return (
    <View className="mt-3">
      <Text className="text-xl mb-2" style={bold}>
        Order history
      </Text>
      <Table>
        <Row data={tableTitles} />
        <TableWrapper><Rows data={orders.map((order) => {
          let obj = ['23', 'sdfdsfdsffd', '3435', 'Delivered']
          return obj
        })} /></TableWrapper>
      </Table>
    </View>
  );
};

export default TableComponent;
