import React from "react";
import { Text, View, ImageBackground } from "react-native";
import StyledButton from "../Button/StyledButton";
import styles from "./styles";

const CarItem = ({ name, tagline, taglineCTA, source }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={source} style={styles.image} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <StyledButton
          type="primary"
          content="custome order"
          onPress={() => {
            console.warn("pressed 1");
          }}
        />

        <StyledButton
          type="secondary"
          content="existing Inventory"
          onPress={() => {
            console.warn("pressed 2");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
