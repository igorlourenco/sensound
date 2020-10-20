import React from "react";

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Header from "./components/Header";
import Main from "./screens/Main";
import Donate from "./screens/Donate";

const {Navigator, Screen} = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false, cardStyle: {backgroundColor: "#F2F3F5"}}}>
                <Screen
                    name="Main"
                    component={Main}
                />
                <Screen
                    name="Donate"
                    component={Donate}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Faça uma doação" showCancel={true}/>
                    }}
                />

            </Navigator>
        </NavigationContainer>
    )
}