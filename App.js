import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DatosPersonales from "./components/DatosPersonales";
import Trayectoria from "./components/Trayectoria";
import AgregarTrayectoria from "./components/AgregarTrayectoria";
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Informacion Personal" component={DatosPersonales} />
        <Stack.Screen name="Trayectoria" component={Trayectoria} />
        <Stack.Screen name="Agregar" component={AgregarTrayectoria} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

