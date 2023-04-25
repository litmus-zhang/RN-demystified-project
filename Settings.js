import React from 'react'
import { View, StatusBar, Button } from 'react-native'
import { styles } from './styles'

export default function Settings({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"} />
            <Text> Settings Screen</Text>
            <Button title='Home' onPress={() => navigation.navigate("Home")} />
        </View>
    )
}
