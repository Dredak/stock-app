import { Text, View, StyleSheet } from "react-native";

const NoDataOverlay = () => {
  return (
    <View style={styles.noDataContainer}>
      <Text style={styles.noDataText}>Currently no data to display.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noDataContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  noDataText: {
    textAlign: "center",
  },
});

export default NoDataOverlay;
