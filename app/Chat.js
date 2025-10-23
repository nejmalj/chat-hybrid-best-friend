import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ChatScreen() {
    const [sound, setSound] = useState(null);
    const CHAT_KEY = "@chat_count";

    const playMeow = async () => {
        try {
            // Jouer le son
            if (sound) {
                await sound.unloadAsync();
                setSound(null);
            }
            const { sound: newSound } = await Audio.Sound.createAsync(
                require("../assets/sounds/meow.mp3")
            );
            setSound(newSound);
            await newSound.playAsync();

            // Incrémenter le compteur Chat
            const count = parseInt(await AsyncStorage.getItem(CHAT_KEY), 10) || 0;
            await AsyncStorage.setItem(CHAT_KEY, (count + 1).toString());
        } catch (error) {
            console.log("Erreur lecture son ou compteur :", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Voici un chat 🐱</Text>

            <TouchableOpacity onPress={playMeow}>
                <Image
                    source={require("../assets/images/cat.png")}
                    style={styles.image}
                    resizeMode="contain"
                />
            </TouchableOpacity>

            <Text style={styles.instruction}>
                Appuie sur le chat pour l’entendre miauler 😺
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
    title: { fontSize: 26, fontWeight: "bold", marginBottom: 30 },
    image: { width: 250, height: 250 },
    instruction: { marginTop: 20, fontSize: 16, color: "#555" },
});
