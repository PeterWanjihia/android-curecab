import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Welcome from "./screens/Welcome";
import Order from "./screens/Order";
import { StatusBar, View } from "react-native";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <View style={{ paddingTop: StatusBar.currentHeight, flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false, animation: "slide_from_right" }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Order" component={Order} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default Navigation;
