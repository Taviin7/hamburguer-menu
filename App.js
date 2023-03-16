import "react-native-gesture-handler"; //Biblioteca que trabalha com gestos, como abrir o Drawer(menu-hamburguer)
import React from "react";
import { NavigationContainer } from "@react-navigation/native"; //Container das navegações

import Routes from "./src/routes"

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}