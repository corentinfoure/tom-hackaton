import { StyleSheet, View } from "react-native"
import { HelloWave } from "@/components/HelloWave"
import { ThemedText } from "@/components/style/ThemedText"
import { Container3Layout } from "@/components/shared/Container3layout"
import type { ItemData } from "@/components/shared/Container3layout"

export const Home = () => {

  const items: ItemData[] = [
    {
      title: "ITEM 1",
      image: require('@/assets/images/react-logo.png')
    },
    {
      title: "ITEM 2",
      image: require('@/assets/images/react-logo.png')
    },
    {
      title: "ITEM 3 ",
      image: require('@/assets/images/react-logo.png')
    },
  ]

  return (
    <View>
      <View style={styles.titleContainer}>
        <ThemedText type="title">Welcome Home!</ThemedText>
        <HelloWave />
        <Container3Layout items={items}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
})
