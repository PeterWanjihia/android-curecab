import { View, Text } from "react-native";
import * as Icons from "react-native-vector-icons";
import { bold, regular } from "../utils";

const Choose = () => {
  const reasons = [
    {
      title: "Convenience",
      desc: "Patients can order their drugs from the comfort of their homes, without having to visit the clinic.",
    },
    {
      title: "Ease of Access",
      desc: "Patients can access their drugs easily and quickly, with no need to travel to clinics.",
    },
    {
      title: "Fast delivery",
      desc: "Patients can receive their drugs in a timely manner, without having to wait in long queues at clinics.",
    },
  ];
  return (
    <View className='bg-white p-4 py-10'>
      <Text className='text-2xl mx-auto' style={bold}>Why choose us</Text>
      {reasons.map((reason) => (
        <View key={reason.title} className='flex flex-row pr-5 mt-5'>
          <Icons.Ionicons name="ios-checkmark-circle" size={30} className='text-red' />
          <View className='ml-3'>
            <Text className='text-lg' style={bold}>{reason.title}</Text>
            <Text className='text-lblack' style={regular}>{reason.desc}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Choose;
