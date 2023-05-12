import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Welcome from "./screens/Welcome";
import Order from "./screens/Order";
import { StatusBar, View } from "react-native";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Forgot from "./screens/Forgot";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUser } from "./redux/features/AuthSlice";

const Stack = createNativeStackNavigator();

function Navigation() {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const getAuthUser = async () => {
    const res = await AsyncStorage.getItem("user");
    setLoading(false);
    dispatch(setUser(res));
  };

  useEffect(() => {
    getAuthUser();
  }, []);

  if (loading) return <View />;
  return (
    <View style={{ paddingTop: StatusBar.currentHeight, flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false, animation: "slide_from_right" }}
        >
          {user ? (
            <>
              <Stack.Screen name="Welcome" component={Welcome} />
              <Stack.Screen name="Order" component={Order} />
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="Forgot" component={Forgot} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default Navigation;
