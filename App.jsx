import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import Display from "./containers/Display";
import Buttons from "./containers/Buttons";

export default function App() {
  const [buttonValue, setButtonValue] = useState("");
  const [topScreen, setTopScreen] = useState("");
  const [operation, setOperation] = useState("");

  function buttonPressedValue(value) {
    //values which we receive when the button is pressed from the other  button press component/...

    setButtonValue((prevValue) => prevValue + value);
  }
  function handleClearButtonPress() {
    setButtonValue("");
    setTopScreen("");
  }
  function performOperation(top, buttom, op) {
    switch (op) {
      case "+":
        return top + buttom;
      case "-":
        return top - buttom;
      case "*":
        return top * buttom;
      case "/":
        return top / buttom;
        break;

      default:
        break;
    }
  }

  function handleOperationButton(oper) {
    //if topScreen is empty then we move button screen value to top screen and we clear the button screen

    if (oper === "Del") {
      setButtonValue((prev) => prev.slice(0, -1));
      return;
    }

    if (!topScreen.length && !buttonValue.length && oper === "=") {
      const result = performOperation(
        parseFloat(topScreen),
        parseFloat(buttonValue),
        operation
      );
      setTopScreen(result.toString());
      setButtonValue("");
      setOperation("");
      return;
    }

    setOperation(oper);
    if (!topScreen.length) {
      setTopScreen(buttonValue);
      setButtonValue("");
    }
    if (topScreen.length && buttonValue.length) {
      const result = performOperation(
        parseFloat(topScreen),
        parseFloat(buttonValue),
        operation
      );
      setTopScreen(result.toString());
      setButtonValue("");
      setOperation("");
      return;
    }
  }
  return (
    <SafeAreaView>
      <View>
        <View style={styles.container}>
          <View style={styles.display}>
            <Display
              pressedButton={buttonValue}
              curOperation={operation}
              topScreenValue={topScreen}
            />
          </View>
          <View>
            <Buttons
              buttonValue={buttonPressedValue}
              clearButton={handleClearButtonPress}
              operationButton={handleOperationButton}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: 900,
    margin: 1,
  },
});
