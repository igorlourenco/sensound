import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {BorderlessButton} from "react-native-gesture-handler";
import {Feather} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native"

interface HeaderProps {
    title: string;
    showBackButton: boolean;
}

export default function Header({title, showBackButton = true}: HeaderProps) {
    const navigation = useNavigation();

    function handleGoBackToHomepage() {
        navigation.navigate('Main')
        ;
    }

    return (
        <View style={styles.container}>
            {showBackButton ? (<BorderlessButton onPress={navigation.goBack}>
                <Feather name="arrow-left" size={24} color="#15B6D6"/>
            </BorderlessButton>) : <View/>}
            <Text style={styles.title}>{title}</Text>
            {!showBackButton && <View/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: "#F9FAFC",
        borderBottomWidth: 1,
        borderColor: "#DDE3F0",
        paddingTop: 44,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    title: {
        color: "#8FA7B6",
        fontSize: 20
    }
})