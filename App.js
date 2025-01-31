import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import HelloTouchableOpacity from "./components/HelloTouchableOpacity";

export default function App() {
  return (
    <View style={styles.container}>
      <HelloTouchableOpacity />
      <StatusBar style="auto" />
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
