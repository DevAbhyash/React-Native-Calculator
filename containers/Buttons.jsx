import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import React from "react";

const Buttons = (props) => {
  function handleButtonPress(e) {
    props.buttonValue(e);
  }
  function handleClearButtonPress() {
    props.clearButton();
  }
  function handleOperationButton(e) {
    //buttons for mathematical operatn
    props.operationButton(e);
  }

  return (
    <View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleClearButtonPress("AC")}
        >
          <Text style={styles.functionalButton}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperationButton("Del")}
        >
          <Text style={styles.functionalButton}>Del</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperationButton("%")}
        >
          <Text style={styles.functionalButton}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperationButton("/")}
        >
          <Text style={styles.functionalButton}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("7")}
        >
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("8")}
        >
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("9")}
        >
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperationButton("*")}
        >
          <Text style={styles.functionalButton}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("4")}
        >
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("5")}
        >
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("6")}
        >
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperationButton("-")}
        >
          <Text style={styles.functionalButton}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("1")}
        >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("2")}
        >
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("3")}
        >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperationButton("+")}
        >
          <Text style={styles.functionalButton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("0")}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("00")}
        >
          <Text style={styles.buttonText}>00</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress(".")}
        >
          <Text style={styles.functionalButton}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperationButton("=")}
        >
          <Text style={styles.functionalButton}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  buttons: {
    marginTop: 220,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 60,
    width: 60,
    flex: 0,
    margin: 3,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    marginLeft: 9,
    marginTop: 10,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  functionalButton: {
    fontSize: 20,
    backgroundColor: "yellow",
  },
});
