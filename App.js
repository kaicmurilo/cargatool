import { StyleSheet, View } from "react-native";
import Form from "./src/components/form/form";
import Titulo from "./src/components/title/title";
import Main from "./src/components/Menu/menu";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Titulo />
      <Form /> */}
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
