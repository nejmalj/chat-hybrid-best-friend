import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Battery from "expo-battery";
import * as Brightness from "expo-brightness";
import { useRouter } from "expo-router";

export default function Splash() {
    const [bgColor, setBgColor] = useState("#ADD8E6"); // bleu clair
    const router = useRouter();

    useEffect(() => {
        const setupScreen = async () => {
            try {
                const batteryLevel = await Battery.getBatteryLevelAsync();

                if (batteryLevel < 0.5) {
                    setBgColor("#FA8072"); // saumon
                    await Brightness.setBrightnessAsync(0.3);
                } else {
                    await Brightness.setBrightnessAsync(0.8);
                }

                // Attendre 2 secondes avant d'aller au menu
                setTimeout(() => {
                    router.replace("/Menu");
                }, 2000);
            } catch (error) {
                console.warn("Erreur splash:", error);
            }
        };

        setupScreen();
    }, []);

    return (
        <View style={[styles.container, { backgroundColor: bgColor }]}>
            <Text style={styles.text}>Bienvenue sur Chat is my best hybrid friend</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    text: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        color: "#fff",
        paddingHorizontal: 20,
    },
});
