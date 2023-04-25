import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import Box from "./Box";

const boxes = new Array(10).fill(0).map((_, i) => i + 1);

export default function Home({navigation}) {
    return (
<View style={styles.container}>
            <StatusBar barStyle={"dark-content"} />
            <Text> Home Screen</Text>
            <Button title='Settings' onPress={() => navigation.navigate("Home")} />
        </View>
    );
}
