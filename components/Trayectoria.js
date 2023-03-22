import React from "react";
import { Button, View, Text } from "react-native";
export default function Trayectoria({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>No hay ninguna Trayectoria</Text>
      <Button title="Añadir" onPress={() => navigation.navigate("AgregarTrayectoria")} />
     
    </View>
  );
}