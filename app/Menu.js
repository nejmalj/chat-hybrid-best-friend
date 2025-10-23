import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, BackHandler, Platform } from "react-native";
import { useRouter } from "expo-router";

export default function MenuScreen() {
    const router = useRouter();

    const handleChat = () => {
        router.push("/Chat");
    };

    const handleDog = () => {
        router.push("/Dog");
    };

    const handleQuit = () => {
        if (Platform.OS === "android") {
            BackHandler.exitApp(); // Ferme l’app sur Android
        } else {
            Alert.alert("Info", "La fermeture automatique n’est pas supportée sur iOS.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menu Principal</Text>

            <TouchableOpacity style={styles.button} onPress={handleChat}>
                <Text style={styles.buttonText}>🐱 Chat</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleDog}>
                <Text style={styles.buttonText}>🐶 Dog</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.quitButton]} onPress={handleQuit}>
                <Text style={styles.buttonText}>🚪 Quit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 40,
    },
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginVertical: 10,
        width: "70%",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    quitButton: {
        backgroundColor: "#FF6F61",
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
    },
});
