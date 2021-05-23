import React from "react";
import { FlatList, Dimensions, StyleSheet, Text, View } from "react-native";
import CarItem from "../CardItem";
import styles from "./CarlistStyle";
import cars from "./cars";

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={cars}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        renderItem={({ item }) => (
          <CarItem
            name={item.name}
            tagline={item.tagline}
            taglineCTA={item.taglineCTA}
            source={item.source}
          />
        )}
      />
    </View>
  );
};

export default CarsList;
