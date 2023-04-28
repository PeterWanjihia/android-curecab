import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Navbar from "../components/Navbar";
import TableComponent from "../components/TableComponent";
import { bold, regular } from "../utils";
import { ScrollView } from "react-native-gesture-handler";

const Welcome = () => {
  return (
    <View className="bg-white flex-1">
      {/* navbar */}
      <Navbar />
      {/* section */}
      <ScrollView showsVerticalScrollIndicator={false} className="p-3">
        <View className="my-3">
          <Text className="text-xl text-lblack" style={bold}>
            Welcome
          </Text>
          <Text className="text-2xl my-2" style={bold}>
            John Doe
          </Text>
          <Text className="text-lblack" style={regular}>
            You can now request a new order and we'll get it delivered to you.
          </Text>

          <TouchableOpacity
            activeOpacity={0.6}
            className=" flex bg-red w-[200px] items-center justify-center rounded-md py-3 my-3 mt-6"
          >
            <Text className='text-white text-md' style={bold}>Make an order</Text>
          </TouchableOpacity>
        </View>

        {/* table */}
        <TableComponent />
      </ScrollView>
    </View>
  );
};

export default Welcome;
