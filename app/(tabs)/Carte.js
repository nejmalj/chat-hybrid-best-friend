import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function Carte() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                    setErrorMsg("Permission de localisation refusée.");
                    return;
                }

                const loc = await Location.getCurrentPositionAsync({});
                setLocation(loc.coords);
            } catch (error) {
                setErrorMsg("Impossible de récupérer la position.");
                console.log(error);
            }
        })();
    }, []);

    // Région pour voir la France entière
    const franceRegion = {
        latitude: 46.5,         // centre approximatif de la France
        longitude: 2.5,
        latitudeDelta: 10.5,    // augmenté pour voir tout le pays
        longitudeDelta: 12,     // augmenté pour englober la France
    };

    if (errorMsg) {
        return (
            <View style={styles.center}>
                <Text>{errorMsg}</Text>
            </View>
        );
    }

    if (!location) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#007BFF" />
                <Text>Chargement de votre position...</Text>
            </View>
        );
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={franceRegion}
            showsUserLocation={true}
            showsMyLocationButton={true}
        >
            <Marker
                coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                title="Vous êtes ici"
                description="Ma position actuelle"
            />
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
