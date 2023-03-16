import { createDrawerNavigator } from "@react-navigation/drawer"; 
import React from "react";

import { Home } from "../pages/Home";
import { Notifications } from "../pages/Notifications"

const Drawer = createDrawerNavigator(); // Biblioteca que usamos para fazer o menu-hambuguer e o tipo de navegação

function Routes() {
    return(
      <Drawer.Navigator>
        <Drawer.Screen name="Home" options={{ headerTitle: "Home" }} component={Home}/>
        <Drawer.Screen name="Notificações" component={Notifications}/>
      </Drawer.Navigator>
    )
}

export default Routes;