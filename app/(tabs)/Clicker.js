import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Clicker() {
    const [chatCount, setChatCount] = useState(0);
    const [dogCount, setDogCount] = useState(0);

    const CHAT_KEY = "@chat_count";
    const DOG_KEY = "@dog_count";

    // Charger les compteurs depuis AsyncStorage au démarrage
    const loadCounts = async () => {
        try {
            const chat = await AsyncStorage.getItem(CHAT_KEY);
            const dog = await AsyncStorage.getItem(DOG_KEY);
            setChatCount(chat ? parseInt(chat, 10) : 0);
            setDogCount(dog ? parseInt(dog, 10) : 0);
        } catch (error) {
            console.log("Erreur chargement compteurs :", error);
        }
    };

    useEffect(() => {
        loadCounts();
    }, []);

    // Réinitialiser les compteurs
    const resetCounts = async () => {
        Alert.alert(
            "Réinitialiser",
            "Voulez-vous vraiment réinitialiser les compteurs ?",
            [
                { text: "Annuler", style: "cancel" },
                {
                    text: "Réinitialiser",
                    style: "destructive",
                    onPress: async () => {
                        setChatCount(0);
                        setDogCount(0);
                        await AsyncStorage.setItem(CHAT_KEY, "0");
                        await AsyncStorage.setItem(DOG_KEY, "0");
                    },
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Clicker 🖱️</Text>

            <Text style={styles.counter}>Compteur Chat 🐱 : {chatCount}</Text>
            <Text style={styles.counter}>Compteur Dog 🐶 : {dogCount}</Text>

            <TouchableOpacity style={styles.resetButton} onPress={resetCounts}>
                <Text style={styles.resetText}>Réinitialiser les compteurs</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 30,
    },
    counter: {
        fontSize: 20,
        fontWeight: "600",
        marginVertical: 10,
    },
    resetButton: {
        marginTop: 40,
        backgroundColor: "#FF6F61",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
    },
    resetText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});
