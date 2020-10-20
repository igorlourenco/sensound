import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RectButton} from "react-native-gesture-handler";
import {useNavigation} from "@react-navigation/native";

export default function Main() {
    const navigation = useNavigation();

    function handleNavigateToDonate() {
        navigation.navigate("Donate");
    }


    return (
        <View style={styles.container}>
            {

                <RectButton style={styles.soundButton}
                            onPress={handleNavigateToDonate}>
                    <Text>Botão</Text>
                </RectButton>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    soundButton: {
        width: "95%",
        height: 100,
        backgroundColor: "#15C3D6",
        borderRadius: 20,
        marginBottom: 10,

        justifyContent: "center",
        alignItems: "center"
    },
});