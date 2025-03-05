import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Constants from "expo-constants";
import Header from "../components/Header";
import { useTheme } from "../components/ThemeContext";

const MainScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#171717" : "#fff" },
      ]}
    >
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={isDarkMode ? "#171717" : "#fff"}
      />
      <Header navigation={navigation} />
      <View style={styles.content}>
        <Text style={{ color: isDarkMode ? "white" : "black" }}>
          안녕하세요
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 60,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainScreen;
