import React, {useRef, useState} from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {RectButton, ScrollView, TouchableOpacity} from "react-native-gesture-handler";
import {useNavigation} from "@react-navigation/native";
import {Audio} from 'expo-av';

const soundObject = new Audio.Sound();

interface Sound {
    id: number;
    name: string;
    uri: string;
    backgroundImage: string;
}

export default function Main() {
    const [playing, setPlaying] = useState(false);
    const soundPlaying = useRef(0)


    const sounds = [
        {
            id: 1,
            name: "Espaço",
            uri: "https://focusli.com/static/media/space.52e3b0cf.mp3",
            backgroundImage: "https://lh3.googleusercontent.com/YGJ77qN9KiwctZgfqV8Bf3hNo0rZvcFaPKDTkvtS6kVbtwyCS80Pm6dpXzJCCLZE1Q"
        },
        {
            id: 2,
            name: "Avião",
            uri: "https://focusli.com/static/media/airplane.f568e2be.mp3",
            backgroundImage: "https://www.theregreview.org/wp-content/uploads/2020/01/airplane.jpg"
        },
        {
            id: 3,
            name: "Arcade",
            uri: "https://focusli.com/static/media/arcade-bar.c0962782.mp3",
            backgroundImage: "https://images.unsplash.com/photo-1532498295735-1a94911c162c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        },
        {
            id: 4,
            name: "Gato ronronando",
            uri: "https://focusli.com/static/media/cat-purr.0166d26b.mp3",
            backgroundImage: "https://www.womansworld.com/wp-content/uploads/2019/02/why-do-cats-purr.jpg?w=715"
        },
        {
            id: 5,
            name: "Gato ronronando",
            uri: "https://focusli.com/static/media/coffee-shop.eb8f0e54.mp3",
            backgroundImage: "https://infatuation.imgix.net/media/images/guides/coffee-shops-nyc-for-doing-work/banners/1503937421.11.jpg?auto=format&fit=max&h=1200&w=3200"
        },

    ]


    async function handlePlaySound(sound: Sound) {
        await Audio.setAudioModeAsync({
            staysActiveInBackground: true
        });
        try {
            if (playing) {
                await soundObject.pauseAsync();
                await soundObject.unloadAsync();
                setPlaying(false);

                if (soundPlaying.current !== sound.id) {
                    setPlaying(true);
                    soundPlaying.current = sound.id;
                    await soundObject.loadAsync(
                        {uri: sound.uri}
                    );

                    await soundObject.setIsLoopingAsync(true);
                    await soundObject.playAsync();
                    console.log(soundPlaying);
                }

            } else {
                setPlaying(true);
                soundPlaying.current = sound.id;
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
    }


    return (
        <ScrollView style={styles.container} contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center"
        }}>
            {
                <View style={styles.soundButtonsContainer}>
                    {
                        sounds.map((sound, index) => {
                            return (
                                <View key={sound.id}>
                                    <RectButton style={styles.soundButton}
                                                      onPress={() => handlePlaySound(sound)}>
                                        <ImageBackground source={{uri: sound.backgroundImage}}
                                                         imageStyle={{borderRadius: 19}}
                                                         style={{width: "100%", height: "100%"}}/>
                                    </RectButton>
                                </View>
                            )
                        })
                    }
                </View>
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    soundButton: {
        width: "100%",
        height: 100,
        backgroundColor: "#124121",
        borderRadius: 20,
        marginBottom: 10,

        justifyContent: "center",
        alignItems: "center"
    },
    soundButtonText:{
        fontSize: 18,
        alignSelf: "center",
        fontFamily: "Ubuntu_500Medium",
        color: "#0e7b90"

    },
    soundButtonsContainer: {
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 10,
        width: "95%"
    },

});