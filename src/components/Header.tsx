import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {BorderlessButton} from "react-native-gesture-handler";
import {Feather} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native"

interface HeaderProps {
    title: string;
    isHome: boolean;
    icon: string;
}

export default function Header({title, isHome = true, icon}: HeaderProps) {
    const navigation = useNavigation();

    function handleGoToDonate() {
        navigation.navigate('Donate');
    }

    return (
        <View>
            {isHome ? (
                    <View style={styles.container}>
                        <Text style={styles.title}>{title}</Text>
                        <BorderlessButton onPress={handleGoToDonate}>
                            {/*<Feather name={icon} size={24} color="#15B6D6"/>*/}
                        </BorderlessButton>
                    </View>
                )
                :
                (
                    <View style={styles.container}>
                        <BorderlessButton onPress={navigation.goBack}>
                            <Feather name={icon} size={24} color="#15B6D6"/>
                        </BorderlessButton>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: "#F9FAFC",
        borderBottomWidth: 1,
        borderColor: "#F9FAFC",
        paddingTop: 44,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    title: {
        color: "#15B6D6",
        fontSize: 20,
        fontFamily: "Ubuntu_700Bold"
    }
})