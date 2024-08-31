import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import moment from "moment";

export default function LodgingDetails({ details }) {
  return (
    <View
      style={{
        marginVertical: 10,
        display: "flex",
        gap: 7,
      }}
    >
      <Text
        style={{
          color: Colors.TEXT,
          fontSize: 24,
          fontFamily: "o-bold",
        }}
      >
        Lodging
      </Text>
      <View
        style={{
          display: "flex",
          gap: 10,
          borderRadius: 12,
          borderBlockColor: Colors.ICON,
          borderWidth: 1,
          padding: 10,
        }}
      >
        <Text
          style={{
            color: Colors.TEXT,
            fontSize: 18,
            fontFamily: "o-bold",
          }}
        >
          Name :
          <Text
            style={{
              color: Colors.TEXT,
              fontSize: 17,
              fontFamily: "o-regular",
            }}
          >
            {" " + details?.name}
          </Text>
        </Text>

        <Text
          style={{
            color: Colors.TEXT,
            fontSize: 18,
            fontFamily: "o-bold",
          }}
        >
          Description :{"  "}
          <Text
            style={{
              color: Colors.TEXT,
              fontSize: 17,
              fontFamily: "o-regular",
            }}
          >
            {details?.description}
          </Text>
        </Text>

        <Text
          style={{
            color: Colors.TEXT,
            fontSize: 18,
            fontFamily: "o-bold",
          }}
        >
          Price :{"  "}
          <Text
            style={{
              color: Colors.TEXT,
              fontSize: 17,
              fontFamily: "o-regular",
            }}
          >
            {details?.price}
          </Text>
        </Text>

        <TouchableOpacity
          style={{
            color: Colors.TEXT,
            fontSize: 20,
            backgroundColor: Colors.ICON,
            height: 35,
            fontFamily: "o-bold",
            width: "40%",
            borderRadius: 10,
          }}
        >
          <Text
            style={{ textAlign: "center", paddingTop: 7, color: Colors.WHITE }}
          >
            Book Here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
