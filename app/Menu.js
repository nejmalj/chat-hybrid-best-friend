import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Menu() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menu Principal</Text>
            <View style={styles.buttons}>
                <Button title="Chat" onPress={() => router.push("/Chat")} />
                <Button title="Dog" onPress={() => router.push("/Dog")} />
                <Button title="Carte" onPress={() => router.push("/Carte")} />
                <Button title="Clicker" onPress={() => router.push("/Clicker")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
    buttons: { gap: 10 },
});
