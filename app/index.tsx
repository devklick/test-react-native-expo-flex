import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Text>Field Name</Text>
        </View>
        <View style={styles.inputDecoration}>
          <Text>X</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    gap: 10,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    padding: 10,
    // removed unsupported/unnecessary CSS
    // boxSizing: "border-box",

    // added CSS which is documented to behave different in react-native:
    alignContent: "stretch",
    flexShrink: 1,
  },
  input: {
    width: "100%",
    textAlign: "left",
    borderWidth: 1,
    borderStyle: "solid",

    // removed unsupported/unnecessary CSS
    // boxSizing: "border-box",
  },
  inputDecoration: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 50,

    // added CSS which is documented to behave different in react-native:
    alignContent: "stretch",
    flexShrink: 1,
  },
});
