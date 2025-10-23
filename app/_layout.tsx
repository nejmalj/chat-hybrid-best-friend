import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="cat" options={{ title: "Chat" }} />
            <Stack.Screen name="dog" options={{ title: "Dog" }} />
        </Stack>
    );
}