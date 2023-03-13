import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { Home } from "./src/pages/Home";
import { Notifications } from "./src/Pages/Notifications";

const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name="Home" options={{ headerTitle: "Home" }} component={Home}/>
        <Menu.Screen name="Notificações" component={Notifications}/>
      </Menu.Navigator>
    </NavigationContainer>
  );
}