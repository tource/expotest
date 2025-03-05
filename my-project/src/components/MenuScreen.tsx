import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useTheme } from "./ThemeContext";

const MenuScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <View
      style={[
        styles.overlay,
        {
          backgroundColor: isDarkMode
            ? "rgba(23, 23, 23, 0.9)"
            : "rgba(255, 255, 255, 0.9)",
        },
      ]}
    >
      <View
        style={[
          styles.menu,
          { backgroundColor: isDarkMode ? "#171717" : "#fff" },
        ]}
      >
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="close"
            size={28}
            color={isDarkMode ? "white" : "black"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Main")}
        >
          <Ionicons
            name="home-outline"
            size={24}
            color={isDarkMode ? "white" : "black"}
            style={styles.menuIcon}
          />
          <Text
            style={[styles.menuText, { color: isDarkMode ? "white" : "black" }]}
          >
            홈
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons
            name="cube"
            size={24}
            color={isDarkMode ? "white" : "black"}
            style={styles.menuIcon}
          />
          <Text
            style={[styles.menuText, { color: isDarkMode ? "white" : "black" }]}
          >
            내 보관함
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons
            name="sell"
            size={24}
            color={isDarkMode ? "white" : "black"}
            style={styles.menuIcon}
          />
          <Text
            style={[styles.menuText, { color: isDarkMode ? "white" : "black" }]}
          >
            판매 하기
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons
            name="shopping-cart"
            size={24}
            color={isDarkMode ? "white" : "black"}
            style={styles.menuIcon}
          />
          <Text
            style={[styles.menuText, { color: isDarkMode ? "white" : "black" }]}
          >
            구매 하기
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons
            name="log-out-outline"
            size={24}
            color={isDarkMode ? "white" : "black"}
            style={styles.menuIcon}
          />
          <Text
            style={[styles.menuText, { color: isDarkMode ? "white" : "black" }]}
          >
            로그아웃
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  menu: {
    width: "100%",
    height: "100%",
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 20,
    position: "absolute",
    right: 0,
  },
  closeButton: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.2)",
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    fontSize: 18,
  },
});

export default MenuScreen;
