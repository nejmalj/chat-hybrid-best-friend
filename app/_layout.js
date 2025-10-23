import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="Splash" />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="Chat" options={{ title: "Chat" }} />
            <Stack.Screen name="Dog" options={{ title: "Dog" }} />
        </Stack>
    );
}
