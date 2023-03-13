import { Text, StyleSheet, View, Image } from "react-native";
import { Card } from '@rneui/themed';

export function Notifications() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Notifcações</Card.Title>
        <Card.Divider />
          <Image
            style={{ width: 300, height: 100}}
            resizeMode="contain"
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYW4IeT3rFPO_2bRzpvl3TYa4n1rU7ZszFA&usqp=CAU" }}/>
          <Text style={styles.text}>Sem nenhuma notifcação</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        textAlign: "center"
    },
});