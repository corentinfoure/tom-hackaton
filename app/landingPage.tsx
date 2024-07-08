import { ThemedText } from '@/components/style/ThemedText'
import { Pressable, View, StyleSheet } from 'react-native'
import { ProgressBar } from '@/components/shared/ProgressBar'
import { Container2Layout } from '@/components/shared/Container2Layout'
import { RootRouteParams } from "@/App"

type LandingPageProps = RootRouteParams<"landingPage">

const items = [
  {label: 'hello'},
  {label: 'world'},
]

export const LandingPage: React.FC<LandingPageProps> = ({
  navigation,
  route,
}) => {
  return (
    <View>
        <ProgressBar currentStep={1} totalSteps={6} />
        <Pressable onPress={() => navigation.navigate('home')}>
          <ThemedText type='link'>Landing page</ThemedText>
        </Pressable>
        <Container2Layout items={items} />
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  },
  buttonsContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal: 10
  }
})
