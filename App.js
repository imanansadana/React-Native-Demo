import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainPage from "./Components/Pages/MainPage/MainPage";
import PostPage from "./Components/Pages/PostPage/PostPage";

//The App navigation for visiting different pages
const AppNavigator = createStackNavigator(
  {
    Home: MainPage,
    Details: PostPage,
  },
  {
    initialRouteName: "Home",
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default createAppContainer(AppNavigator);
