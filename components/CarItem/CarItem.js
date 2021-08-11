import React from "react";
import { ImageBackground, Text, View } from "react-native";
import Button from "../Button/Button";
import styles from "./styles";

const CarItem = (props) => {
  const { name, tagLine, tagLineUL, image } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagLine}&nbsp;
          <Text style={styles.subtitleUL}>{tagLineUL}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          background="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom order was pressed");
          }}
        />
        <Button
          background="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
