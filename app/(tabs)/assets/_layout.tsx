import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import { Stack, withLayoutContext } from "expo-router";
import {
  ParamListBase,
  TabNavigationState,
  useTheme,
} from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { autoScroll } from "@shopify/flash-list";
const { Navigator } = createMaterialTopTabNavigator();

const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function MaterialTopTabsLayout() {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();

  return (
    <MaterialTopTabs
      initialRouteName="hot"
      screenOptions={{
        tabBarContentContainerStyle: {
          borderColor: "#fff",
        },
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: "grey",
        tabBarLabelStyle: {
          fontSize: 14,
          textTransform: "capitalize",
          fontWeight: "bold",
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.text,
          width: 0.5,
          height: 3,
        },
        tabBarStyle: {
          width: 'auto',
          alignSelf: "center",
          elevation: 0, // Remove shadow on Android
          shadowOpacity: 0, // Remove shadow on iOS
          borderBottomWidth: 0, // Remove the bottom border if there is one
        },
        tabBarScrollEnabled: true,
        tabBarItemStyle: { width: "auto", minWidth: 50 },
      }}
    >
      <MaterialTopTabs.Screen name="hot" options={{ title: "Hot" }} />
      <MaterialTopTabs.Screen name="kings" options={{ title: "Kings" }} />
    </MaterialTopTabs>
  );
}
