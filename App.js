import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
// import Carousel from "./components/Carousel";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      {/* <Carousel /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
