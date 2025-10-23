import { Tabs } from "expo-router";
import {IconSymbol} from "@/components/ui/icon-symbol";
import React from "react";

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
                name="index"
                options={{
                    title: "Menu",
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
                }}
            />

            <Tabs.Screen
                name="map"
                options={{
                    title: "Carte",
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="map.fill" color={color} />,
                }}
            />

            <Tabs.Screen
                name="clicker"
                options={{
                    title: "Clicker",
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="map.fill" color={color} />,
                }}
            />
        </Tabs>
    );
}