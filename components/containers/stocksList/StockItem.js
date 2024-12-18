import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const StockItem = ({ description, onPress, symbol }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.stockItem,
        pressed ? styles.stockItemPressed : null,
      ]}
    >
      <View style={styles.leftSection}>
        <Image
          source={{ uri: "https://via.placeholder.com/40" }}
          style={styles.logo}
        />
        <View>
          <Text style={styles.symbol}>{symbol}</Text>
          <Text style={styles.name}>{description}</Text>
        </View>
      </View>
      <AntDesign name="right" size={20} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  stockItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#292929",
    borderRadius: 12,
    padding: 14,
  },
  stockItemPressed: {
    backgroundColor: "#3A3A3A",
  },
  stockItemShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  symbol: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  name: {
    color: "#AAAAAA",
    fontSize: 12,
  },
});

export default StockItem;
