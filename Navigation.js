import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Welcome from "./screens/Welcome";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function Screens() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Screens;
