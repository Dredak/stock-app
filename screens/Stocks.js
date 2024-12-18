import { View, StyleSheet } from "react-native";
import StocksList from "../components/containers/stocksList";

const Stocks = () => {
  return (
    <View style={styles.container}>
      <StocksList />;
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
});

export default Stocks;
