import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RectButton} from "react-native-gesture-handler";
import {Feather} from "@expo/vector-icons";
import {Audio} from 'expo-av';
import index from "@react-native-community/masked-view";

const soundObject = new Audio.Sound();

interface Sound {
    id: number;
    name: string;
    uri: string;
}

export default function App() {

    const [playing, setPlaying] = useState(false);
    const [soundPlaying, setSoundPlaying] = useState(0);

    const sounds = [
        {
            id: 1,
            name: "Cristal 1",
            uri: "https://focusli.com/static/media/14in-crystal.024217ee.mp3"
        },
        {
            id: 2,
            name: "Cristal 2",
            uri: "https://focusli.com/static/media/16in-crystal.0ac47f0e.mp3"
        },
        {
            id: 3,
            name: "Espaço",
            uri: "https://focusli.com/static/media/space.52e3b0cf.mp3"
        },

    ]

    const handlePlaySound =  async (sound: Sound) => {

        console.log(playing);
        await Audio.setAudioModeAsync({
            staysActiveInBackground: true
        });
        try {
            if (playing) {
                await soundObject.pauseAsync();
                await soundObject.unloadAsync();
                setPlaying(false);

            } else {
                setPlaying(true);
                await soundObject.loadAsync(
                    {uri: sound.uri}
                );

                await soundObject.setIsLoopingAsync(true)
                await soundObject.playAsync();
                console.log(soundPlaying);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            {
                sounds.map((sound, index) => {
                    return (
                        <RectButton key={index} style={styles.soundButton}
                                    onPress={() => handlePlaySound(sound)}>
                            <Text>{sound.name}</Text>
                        </RectButton>
                    )
                })
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
    }
});
