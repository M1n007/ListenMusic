import React, { Component } from "react";

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import { Image, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import HomeScreen from "../../src/index";
import HomeTab from "../../src/HomeTab/index";
import ListMusic from "../../src/ListMusicTab/index";
import SearchMusic from "../../src/SearchTab/index";

// icon
import HomeIcon from "../../src/assets/icon/HomeIcon.png";
import ListIcon from "../../src/assets/icon/ListIcon.png";
import SearchIcon from "../../src/assets/icon/SearchIcon.png";

const BerandaNav = createBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeTab,
      navigationOptions: {
        header: null,
        labelStyle: null,
        tabBarIcon: ({ focused }) => {
          return focused ? (
            <View>
              <Icon
                name="home"
                size={30}
                color="#50a5f4"
                style={styles.iconActiveStyle}
              />
              <View style={styles.tabActiveStyle} />
            </View>
          ) : (
            <Icon name="home" size={22} color="#797979" />
          );
        }
      }
    },
    ListMusic: {
      screen: ListMusic,
      navigationOptions: {
        header: null,
        tabBarIcon: ({ focused }) => {
          return focused ? (
            <View>
              <Icon
                name="music"
                size={30}
                color="#50a5f4"
                style={styles.iconActiveStyle}
              />
              <View style={styles.tabActiveStyle} />
            </View>
          ) : (
            <Icon name="music" size={22} color="#797979" />
          );
        }
      }
    },

    SearchMusic: {
      screen: SearchMusic,
      navigationOptions: {
        header: null,
        tabBarIcon: ({ focused }) => {
          return focused ? (
            <View>
              <Icon
                name="search"
                size={30}
                color="#50a5f4"
                style={styles.iconActiveStyle}
              />
              <View style={styles.tabActiveStyle} />
            </View>
          ) : (
            <Icon name="search" size={22} color="#797979" />
          );
        }
      }
    }
  },
  {
    initialRoute: HomeTab,
    tabBarOptions: {
      //   activeTintColor: "#6ca91d",
      //   indicatorStyle: {
      //     backgroundColor: "transparent"
      //   },
      style: {
        backgroundColor: "#fff",
        height: 57,
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        borderTopColor: "transparent",
        borderTopWidth: 0
      },
      showLabel: false,
      showIcon: true,
      upperCaseLabel: false,
      iconStyle: {
        marginBottom: -7,
        width: 20
      }
    },
    swipeEnabled: false,
    animationEnabled: true,
    lazy: true,
    removeClippedSubviews: true
  }
);

const AppNavigator = createStackNavigator({
  BerandaNav: {
    screen: BerandaNav,
    navigationOptions: {
      header: null
    }
  }
  //   BerandaNav: {
  //     screen: TabNavigator,
  //     navigationOptions: {
  //       header: null
  //     }
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  iconStyle: {
    height: 25,
    width: 25,
    resizeMode: "contain"
  },
  iconActiveStyle: {
    flex: 1,
    padding: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 1
  },
  tabActiveStyle: {
    height: 100,
    width: 80,
    borderRadius: 80,
    backgroundColor: "#fff"
  }
});
