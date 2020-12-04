import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function PostCard(props) {
  //Touchable card for individual posts
  return (
    <TouchableOpacity
      onPress={() =>
        props.params.navigation.navigate("Details", { id: props.id })
      }
    >
      <View style={styles.card}>
        <Text style={styles.name}>Publisher Name</Text>
        <Image
          style={{
            width: "100%",
            height: 300,
          }}
          source={require("../../assets/Traveling-rafiki.png")}
        />
        <Text style={styles.description} numberOfLines={1}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
