import { View, StyleSheet } from "react-native"
import { CustomButton } from "./CustomButton"

export type ItemData = {
    label: string
}

export const Container2Layout: React.FC<{items: ItemData[]}> = ({items}) => {

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <CustomButton title={items[0].label} handleOnPress={() => console.log('hello')} />
                {items[1] &&
                <CustomButton title={items[1].label} handleOnPress={() => console.log('hello')} />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // Add styles if needed
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
})