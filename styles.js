import { Platform, StyleSheet, StatusBar } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'ghostwhite',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        gap: 10,
        flexWrap: 'wrap',
        ...Platform.select({
            ios: { paddingTop: 20 },
            android: { paddingTop: StatusBar.currentHeight },
        }),
    },
    box: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: "lightgray",
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'darkslategray',
    },
    boxText: {
        fontWeight: "bold",
        color: 'darkslategray',
    }
});

