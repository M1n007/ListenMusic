import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class ListMusic extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "#50a5f4", borderBottomLeftRadius: 200, borderBottomRightRadius:200 }}>
        <View style={styles.firstBox}>
          <View style={styles.default_pic} />
          <View style={{ paddingTop: 30 }}>
            <Text style={styles.titleMusic}>Likey - Likey</Text>
            <Text style={styles.singerName}>Twice</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  firstBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    height: "100%"
  },
  default_pic: {
    width: 220,
    height: 220,
    backgroundColor: "#2980b9",
    borderRadius: 120
  },
  titleMusic: {
    color: "#646464",
    fontFamily: "SF Pro Text",
    fontSize: 22,
    fontWeight: "600",
    letterSpacing: -0.44,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center"
  },
  singerName: {
    color: "#646464",
    fontFamily: "SF Pro Text",
    fontSize: 16,
    fontWeight: "400",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center"
  }
});
