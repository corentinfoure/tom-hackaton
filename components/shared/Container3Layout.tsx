import { View, Image, StyleSheet, ImageSourcePropType } from "react-native"
import { ThemedText } from "../style/ThemedText"

export type ItemData = {
    title: string,
    image: ImageSourcePropType,
}

export const Container3Layout: React.FC<{items: ItemData[]}> = ({items}) => {

    return (

        <View style={styles.container}>
            {items.map((item) => {
                return(
                    <View style={styles.itemContainer} key={item.title}>
                        <View style={styles.imageContainer}>
                            <Image source={item.image} style={styles.image}/>
                        </View>
                        <ThemedText type='subtitle' style={styles.title}>{item.title}</ThemedText>
                    </View>
                )
            }
            )}
        </View>
    )}

const styles=StyleSheet.create({
    container:{
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        borderRadius: 10,
    },
    itemContainer:{
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 5,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer:{
    },
    image: {
        width: 100,
        height: 100,
    },
    title: {
        marginVertical: 5,
    }
})