import { View, StyleSheet } from "react-native"
import { ThemedText } from "../style/ThemedText"
import { Ionicons } from "@expo/vector-icons"

type InformationBannerProps = {
    title: string
    description: string
}

export const InformationBanner= ({ title, description }: InformationBannerProps) => {
  return (
    <View style={styles.container}>
        <Ionicons name="information-circle-sharp" size={32} color={'blue'}/>
        <View style={styles.textContainer}>
            <ThemedText type="subtitle">{title}</ThemedText>
            <ThemedText type="default">{description}</ThemedText>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "lightblue",
        padding: 15,
    },
    textContainer: {
        flexDirection: "column",
        alignItems: "center",
    }
})