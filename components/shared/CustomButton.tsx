import { View, Pressable, StyleSheet } from 'react-native'
import { ThemedText } from '../style/ThemedText'

type ButtonType = {
    title: string
    handleOnPress: () => void
}

export const CustomButton = ({title, handleOnPress}: ButtonType) => {
    return (
        <Pressable style={styles.button} onPress={handleOnPress}>
            <View>
                <ThemedText type='subtitle'>{title}</ThemedText>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'lightgreen',
        padding: 10,
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
        width: '45%'
    },
})