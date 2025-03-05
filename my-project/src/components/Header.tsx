import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useTheme } from "./ThemeContext";

const Header = ({ navigation }) => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: isDarkMode ? "#171717" : "#fff" },
      ]}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
        <Ionicons
          name="menu"
          size={28}
          color={isDarkMode ? "white" : "black"}
          style={styles.menuIcon}
        />
      </TouchableOpacity>
      <Text
        style={[styles.headerText, { color: isDarkMode ? "white" : "black" }]}
      >
        My App
      </Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Ionicons
          name={isDarkMode ? "sunny-outline" : "moon-outline"}
          size={28}
          color={isDarkMode ? "white" : "black"}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: Constants.statusBarHeight,
    left: 0,
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    zIndex: 10,
  },
  menuIcon: {
    marginRight: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
