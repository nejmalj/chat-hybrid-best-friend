import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import * as SMS from "expo-sms";

export default function DogScreen() {
    const [dogImage, setDogImage] = useState(null);
    const [loading, setLoading] = useState(true);

    // 🔹 Fonction pour récupérer une image de chien via l'API dog.ceo
    const fetchDog = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();
            setDogImage(data.message);
        } catch (error) {
            Alert.alert("Erreur", "Impossible de charger une image de chien.");
        } finally {
            setLoading(false);
        }
    };

    // 🔹 Prépare un SMS avec le texte donné
    const sendSMS = async () => {
        const isAvailable = await SMS.isAvailableAsync();
        if (isAvailable) {
            await SMS.sendSMSAsync(["0606060606"], "Je n'aime pas les chats");
        } else {
            Alert.alert("Erreur", "La fonction SMS n’est pas disponible sur cet appareil.");
        }
    };

    // Charger un chien dès l'ouverture
    useEffect(() => {
        fetchDog();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Voici un chien 🐶</Text>

            {loading ? (
                <ActivityIndicator size="large" color="#007BFF" />
            ) : (
                <TouchableOpacity onPress={sendSMS}>
                    <Image source={{ uri: dogImage }} style={styles.image} resizeMode="contain" />
                </TouchableOpacity>
            )}

            <Text style={styles.instruction}>
                Appuie sur le chien pour envoyer un SMS 😅
            </Text>

            <TouchableOpacity style={styles.refreshButton} onPress={fetchDog}>
                <Text style={styles.refreshText}>🔄 Un autre chien !</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20,
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 10,
        marginBottom: 20,
    },
    instruction: {
        fontSize: 16,
        color: "#555",
        marginBottom: 15,
    },
    refreshButton: {
        backgroundColor: "#007BFF",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
    },
    refreshText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});
