import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, ActivityIndicator, StyleSheet } from "react-native";

export default function Index() {
    const router = useRouter();

    useEffect(() => {
        // Attendre un tick avant la redirection pour laisser le layout se monter
        const timer = setTimeout(() => {
            router.replace("/Splash");
        }, 50); // 50 ms suffisent généralement

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#007BFF" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
