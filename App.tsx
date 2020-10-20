import React from 'react';
import Routes from "./src/routes";
import {
    useFonts,
    Ubuntu_700Bold,
    Ubuntu_500Medium,
} from "@expo-google-fonts/ubuntu";
import {View} from "react-native";

export default function App() {

    let [fontsLoaded] = useFonts({
        Ubuntu_700Bold,
        Ubuntu_500Medium
    });

    if (!fontsLoaded){
        return <View/>;
    }

    return (
        <Routes/>
    );
}
