import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { EmotionsRouteParams } from "./Emotions.navigator";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { ThemedText } from "@/components/style/ThemedText";
import { QuestionExample } from "../SpeechCreate/QuestionExample";
import { CustomButton } from "@/components/shared/CustomButton";

type EmotionsProps = EmotionsRouteParams<'Today'>;

export const TodayScreen: React.FC<EmotionsProps> = ({ navigation, route }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView >
                <ProgressBar currentStep={4} totalSteps={5} />
                <ThemedText type="title">Le jour de mon intervention</ThemedText>
                <View style={styles.textAndFigureContainer}>
                    <View style={styles.figureContainer}>
                        <Text style={styles.figure}>1</Text>
                    </View>
                    <ThemedText type="subtitle">J’arrive au moins 30 minutes en avance pour préparer la salle et mon
    matériel.</ThemedText>
                </View>
                <View style={styles.textAndFigureContainer}>
                    <View style={styles.figureContainer}>
                        <Text style={styles.figure}>2</Text>
                    </View>
                    <ThemedText type="subtitle">Je prépare les tables et les chaises pour mon public et pour moi.</ThemedText>
                </View>
                <View style={styles.textAndFigureContainer}>
                    <View style={styles.figureContainer}>
                        <Text style={styles.figure}>3</Text>
                    </View>
                    <ThemedText type="subtitle">J’essaie mon matériel avant l’arrivée du public.</ThemedText>
                </View>
                <View style={styles.textAndFigureContainer}>
                    <View style={styles.figureContainer}>
                        <Text style={styles.figure}>4</Text>
                    </View>
                    <ThemedText type="subtitle">Je range mon matériel à côté de moi.</ThemedText>
                </View>

                <QuestionExample text={`- les post-it
    - les dessins
    - les documents...`} titleExample={'Exemple'} />

                <CustomButton
                    title="Terminer"
                    rightIcon='chevron-up-outline'
                    handleOnPress={() => navigation.navigate('home')}
                    variant="primary"
                    style={{ marginTop: 24, marginBottom: 12 }} />
                <CustomButton
                    title="Précédent"
                    leftIcon='chevron-back-outline'
                    handleOnPress={navigation.goBack}
                    variant="secondary" />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textAndFigureContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 16,
    },
    figureContainer: {
        backgroundColor: 'blue',
        borderRadius: 50,
        width: 35,
        height: 35,
        justifyContent: 'center',
    },
    figure: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 10,
        textAlign: 'center',
        lineHeight: 30
    }
})