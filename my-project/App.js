import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./src/screen/MainScreen";
import MenuScreen from "./src/components/MenuScreen";
import { ThemeProvider } from "./src/components/ThemeContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Menu" component={MenuScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
