import { Text, StyleSheet, View, Image } from "react-native";
import { Card } from '@rneui/themed';

export function Home() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Home</Card.Title>
        <Card.Divider />
          <Image
            style={{ width: 300, height: 100,}}
            resizeMode="contain"
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDd85q5gonmv1IKcJVDDrj7RXcAU0geVMaCQ&usqp=CAU" }}/>
          <Text style={styles.text}>Conheça o App</Text>
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