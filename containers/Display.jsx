import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

export default function Display(props) {
  return (
    <View>
      <View style={styles.display1}>
        <Text style={styles.lowerDisplay}>{props.topScreenValue}</Text>
      </View>
      <View style={styles.display2}>
        <Text style={styles.lowerDisplay}>{props.pressedButton}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  display1: {
    color: "white",
    backgroundColor: "white",
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    height: 60,
    padding: 10,
    borderRadius: 2,
  },
  display2: {
    color: "white",
    backgroundColor: "white",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    height: 60,
    padding: 10,
  },
  lowerDisplay: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
