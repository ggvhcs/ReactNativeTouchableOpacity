import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity
} from "react-native";

export default function HelloTouchableOpacity() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>!React Native, Touchable Opacity.</Text>

      <TouchableOpacity
        onPress={() => {
          console.log("!Touchable Opacity OnPress.");
        }}
      >
        <Image
          source={{ uri: "https://picsum.photos/200/200" }}
          style={styles.image}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 30 },
  image: { height: 200, width: 200, borderRadius: 100 },
  button: {
    backgroundColor: "deepskyblue",
    padding: 7,
    marginTop: 10,
  },
});
