import React from "react";
import { View, Text, StyleSheet } from "react-native";

import LoadingOverlay from "../../LoadingOverlay";
import NoDataOverlay from "../../NoDataOverlay";
import ErrorOverlay from "../../ErrorOverlay";
import { useRoute } from "@react-navigation/native";
import useGetStockDetails from "../../../hooks/useGetStockDetails";

const StockDetails = () => {
  const { params } = useRoute();
  const { symbol } = params;
  const { data, error, isFetching } = useGetStockDetails(symbol);

  if (isFetching) {
    return <LoadingOverlay />;
  }

  if (error) {
    return <ErrorOverlay errorMessage={error} />;
  }

  if (!data || data === null || data.length === 0) {
    return <NoDataOverlay />;
  }

  const { c, d, dp, h, l, o, pc } = data;

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.symbol}>{symbol}</Text>
        <Text style={styles.currentPrice}>${c}</Text>
      </View>
      <View style={styles.sectionWrapper}>
        <View style={styles.detailBox}>
          <Text style={styles.label}>Change</Text>
          <Text
            style={[styles.value, d >= 0 ? styles.positive : styles.negative]}
          >
            {d} ({dp}%)
          </Text>
        </View>
      </View>
      <View style={styles.sectionWrapper}>
        <View style={styles.detailBox}>
          <Text style={styles.label}>High</Text>
          <Text style={styles.value}>${h}</Text>
        </View>
        <View style={styles.detailBox}>
          <Text style={styles.label}>Low</Text>
          <Text style={styles.value}>${l}</Text>
        </View>
      </View>
      <View style={styles.sectionWrapper}>
        <View style={styles.detailBox}>
          <Text style={styles.label}>Open</Text>
          <Text style={styles.value}>${o}</Text>
        </View>
        <View style={styles.detailBox}>
          <Text style={styles.label}>Prev Close</Text>
          <Text style={styles.value}>${pc}</Text>
        </View>
      </View>
      <View style={styles.spacer} />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Stock Overview: {symbol}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 24,
    justifyContent: "space-between",
  },
  headerSection: {
    alignItems: "center",
    marginBottom: 24,
  },
  symbol: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },
  currentPrice: {
    color: "#1E90FF",
    fontSize: 36,
    fontWeight: "bold",
  },
  sectionWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  detailBox: {
    flex: 1,
    alignItems: "center",
  },
  label: {
    color: "#AAAAAA",
    fontSize: 14,
    marginBottom: 4,
  },
  value: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  positive: {
    color: "#4CAF50",
  },
  negative: {
    color: "#FF5252",
  },
  spacer: {
    flex: 1,
  },
  footer: {
    alignItems: "center",
    marginTop: 12,
  },
  footerText: {
    color: "#AAAAAA",
    fontSize: 16,
  },
});

export default StockDetails;
