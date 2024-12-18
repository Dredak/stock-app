import { FlatList, Text, View, StyleSheet, Pressable } from "react-native";
import useGetStocks from "../../../hooks/useGetStocks";
import LoadingOverlay from "../../LoadingOverlay";
import StockItem from "./StockItem";
import NoDataOverlay from "../../NoDataOverlay";
import ErrorOverlay from "../../ErrorOverlay";
import { useNavigation } from "@react-navigation/native";
import { stockDetailsScreen } from "../../../config/screenNames";

const StocksList = () => {
  const { data, error, isFetching, refetch } = useGetStocks();
  const navigation = useNavigation();

  const pressHandler = (symbol) => {
    navigation.navigate(stockDetailsScreen, { symbol });
  };

  const renderStockItem = ({ item }) => {
    const { description, symbol } = item;
    return (
      <StockItem
        description={description}
        onPress={() => pressHandler(symbol)}
        symbol={item.displaySymbol}
      />
    );
  };

  if (isFetching) {
    return <LoadingOverlay />;
  }

  if (error) {
    return <ErrorOverlay errorMessage={error} />;
  }

  if (!data || data === null || data.length === 0) {
    return <NoDataOverlay />;
  }

  return (
    <>
      <FlatList
        data={data.slice(0, 15)} //didn't want to render bunch of them
        keyExtractor={(item) => item.figi} //looked like something unique :)
        renderItem={renderStockItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <Pressable style={styles.refreshButton} onPress={refetch}>
        <Text style={styles.refreshButtonText}>Refresh</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 8,
  },
  refreshButton: {
    marginTop: 16,
    backgroundColor: "#1E90FF",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  refreshButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default StocksList;
