import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Section = () => {
  return (
    <View>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>
        You can now request a new order and we'll get it delivered to you.
      </Text>
      <TouchableOpacity>
        <Text>Make order</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Section