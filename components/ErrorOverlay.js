import { Text, View, StyleSheet } from "react-native";

const ErrorOverlay = ({ errorMessage }) => {
  return (
    <View style={styles.noDataContainer}>
      <Text style={styles.noDataText}>{errorMessage}</Text>
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
    color: "red",
    textAlign: "center",
  },
});

export default ErrorOverlay;
