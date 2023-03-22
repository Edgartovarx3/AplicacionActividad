import React from "react";
import { Button, View, Text } from "react-native";
export default function DatosPersonales({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text >Eh aqui una imagen</Text>
      <Button title="Informacion Personal" onPress={() => navigation.navigate("Materia")} />
      <Button title="Trayectoria Profesional" onPress={() => navigation.navigate("Trayectoria")} />
      <Button title="Temas de Interes" onPress={() => navigation.navigate("Materia")} />
      <Button title="Subida de documentos" onPress={() => navigation.navigate("Materia")} />
      
    </View>
  );
}
