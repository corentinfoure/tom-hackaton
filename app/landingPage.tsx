import { ThemedText } from '@/components/ThemedText'
import { Pressable, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'


export const LandingPage = () => {

    const navigation = useNavigation()

    return (
        <View>
            <ThemedText>Landing page</ThemedText>
            <Pressable onPress={() => { navigation.navigate('tabs') }}>
                <ThemedText type='link'>Navigate to tabs</ThemedText>
            </Pressable>
        </View>
    )

}