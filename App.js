import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { Contato } from "./src/Pages/Contato";
import { Inicio } from "./src/Pages/Inicio";
import { Notificacoes, Notification } from "./src/Pages/Notificacoes";

const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen
          name="Inicio"
          options={{
            headerTitle: "Inicio",
          }}
          component={Inicio}
        />
        <Menu.Screen name="Contato" component={Contato} />
        <Menu.Screen name="Notificacões" component={Notificacoes} />
      </Menu.Navigator>
    </NavigationContainer>
  );
}