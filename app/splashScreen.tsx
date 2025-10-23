import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as Battery from 'expo-battery';
import * as Brightness from 'expo-brightness';

export default function SplashScreen() {
    const [bgColor, setBgColor] = useState('#ADD8E6');
    useEffect(() => {
        async function setup() {
            try {
                const batteryLevel = await Battery.getBatteryLevelAsync();
                const batteryPercent = batteryLevel * 100;

                if (batteryPercent > 50) {
                    setBgColor('#ADD8E6');
                    await Brightness.setBrightnessAsync(1);
                } else {
                    setBgColor('#FA8072');
                    await Brightness.setBrightnessAsync(0.3);
                }
            } catch (e) {
                console.warn('Erreur lors de la récupération de la batterie ou de la luminosité', e);
            }
        }

        setup();
    }, []);

    return (
        <View style={[styles.container, { backgroundColor: bgColor }]}>
            <Text style={styles.message}>
                Bienvenue sur Chat is my best hybrid friend
            </Text>
            <ActivityIndicator size="large" color="#ffffff" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 20,
    },
});
