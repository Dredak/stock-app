import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import StocksScreen from "./screens/Stocks";
import Details from "./screens/StockDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { stockDetailsScreen, stocksScreen } from "./config/screenNames";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#121212",
            },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name={stocksScreen}
            component={StocksScreen}
            options={{ title: "Stocks" }}
          />
          <Stack.Screen
            name={stockDetailsScreen}
            component={Details}
            options={{ title: "Stock Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
