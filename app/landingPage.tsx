import { ThemedText } from '@/components/style/ThemedText'
import { Pressable, View, StyleSheet } from 'react-native'
import { ProgressBar } from '@/components/shared/ProgressBar'
import { CustomButton } from '@/components/shared/CustomButton'
import { InputText } from '@/components/shared/InputText'
import { RootRouteParams } from "@/App"

type LandingPageProps = RootRouteParams<"landingPage">;

export const LandingPage: React.FC<LandingPageProps> = ({
  navigation,
  route,
}) => {
  return (
    <View>
        <ProgressBar currentStep={1} totalSteps={6} />
        <ThemedText>Landing page</ThemedText>
        <InputText value={''} largeInput onChangeText={(value) => console.log(value)} />
        <View style={styles.buttonsContainer}>
            <CustomButton title={'PRECEDENT'} handleOnPress={() => console.log('hello')} />
            <CustomButton title={'SUIVANT'} handleOnPress={() => console.log('hello')} />
        </View>
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
