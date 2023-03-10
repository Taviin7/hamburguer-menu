import { Text, StyleSheet, View } from "react-native";

export function Contato() {
  return (
    <View style={styles.container}>
      <Text>Tavinho lindo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});