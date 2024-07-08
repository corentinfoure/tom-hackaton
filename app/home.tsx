import { StyleSheet, View } from "react-native"
import { HelloWave } from "@/components/HelloWave"
import { ThemedText } from "@/components/ThemedText"

export const Home = () => {

  return (
    <View>
      <View style={styles.titleContainer}>
        <ThemedText type="title">Welcome Home!</ThemedText>
        <HelloWave />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
})
