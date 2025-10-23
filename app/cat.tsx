import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, BackHandler, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function Cat() {

    const handleQuit = () => {
        if (Platform.OS === 'android') {
            BackHandler.exitApp();
        } else {
            Alert.alert(
                'Bien tenté',
                'Désolée, la fermeture de l’application n’est pas supportée sur iOS !',
                [{ text: 'OK' }]
            );
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenue sur la meilleure app !</Text>

            <TouchableOpacity style={[styles.button, styles.quitButton]} onPress={handleQuit}>
                <Text style={styles.buttonText}>Quit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
    },
    button: {
        width: '80%',
        padding: 15,
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
    },
    quitButton: {
        backgroundColor: '#f44336',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
