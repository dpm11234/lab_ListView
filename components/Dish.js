import React from "react";
import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Dish(props) {
  let width = Dimensions.get("window").width;
  const { name, price, image } = props.dish;

  return (
    <TouchableOpacity style={{ flex: 1 }}>
      <View
        style={{
          flex: 0,
          flexDirection: "row",
          marginTop: 20,
          borderColor: "red",
          borderWidth: 2,
          borderRadius: 20
        }}
      >
        <View style={{ flex: 0, justifyContent: "center" }}>
          <Image
            source={{ uri: image }}
            style={{
              position: "absolute",
              width: width * 0.3,
              height: width * 0.3,
              borderRadius: 70,
              left: -((width * 0.3) / 2)
            }}
          />
        </View>
        <View
          style={{
            flex: 0,
            width: "80%",
            paddingVertical: 20,
            paddingLeft: (width * 0.3) / 2 + 15
          }}
        >
          <View style={{ flex: 80 }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>{name}</Text>
            <Text style={{ fontSize: 25, color: "red" }}>{price} đ</Text>
          </View>
          <View style={{ flex: 20, flexDirection: "row" }}>
            <Icon name="star" color="yellow" size={20} />
            <Icon name="star" color="yellow" size={20} />
            <Icon name="star" color="yellow" size={20} />
            <Icon name="star-half-empty" color="yellow" size={20} />
            <Icon name="star-o" color="yellow" size={20} />
          </View>
        </View>
        <View style={{ width: "20%" }}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Icon name="chevron-right" size={30} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
