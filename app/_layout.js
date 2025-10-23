import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack screenOptions={{ headerShown: true }}>
            {/* Route initiale (accueil) */}
            <Stack.Screen name="index" options={{ headerShown: false }} />

            {/* Splash Screen */}
            <Stack.Screen name="Splash" options={{ headerShown: false }} />

            {/* Autres écrans */}
            <Stack.Screen name="Menu" options={{ title: "Menu Principal" }} />
            <Stack.Screen name="Chat" options={{ title: "Chat" }} />
            <Stack.Screen name="Dog" options={{ title: "Dog" }} />
            <Stack.Screen name="Carte" options={{ title: "Carte" }} />
            <Stack.Screen name="Clicker" options={{ title: "Clicker" }} />
        </Stack>
    );
}
