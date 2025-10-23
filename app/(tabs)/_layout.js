import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: true,
                tabBarActiveTintColor: "#007BFF",
                tabBarInactiveTintColor: "gray",
                tabBarStyle: { paddingBottom: 6, height: 60 },
            }}
        >
            <Tabs.Screen
                name="Menu"
                options={{
                    title: "Menu",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="Carte"
                options={{
                    title: "Carte",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="map-outline" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="Clicker"
                options={{
                    title: "Clicker",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="hand-left-outline" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
