import { View, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import { EmotionsRouteParams } from './Emotions.navigator'
import { ProgressBar } from '@/components/shared/ProgressBar';
import { ThemedText } from '@/components/style/ThemedText';
import { QuestionExample } from '../SpeechCreate/QuestionExample';
import { CustomButton } from '@/components/shared/CustomButton';

type EmotionsProps = EmotionsRouteParams<'Week'>;

export const WeekScreen: React.FC<EmotionsProps> = ({ navigation, route }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView >
                <ProgressBar currentStep={3} totalSteps={5} />
                <ThemedText type="title">Une semaine avant</ThemedText>
                <View style={styles.textAndFigureContainer}>
                    <View style={styles.figureContainer}>
                        <Text style={styles.figure}>1</Text>
                    </View>
                    <ThemedText type="subtitle">Je m'imagine avec mon public</ThemedText>
                </View>
                <View style={styles.textAndFigureContainer}>
                    <View style={styles.figureContainer}>
                        <Text style={styles.figure}>2</Text>
                    </View>
                    <ThemedText type="subtitle">Je réfléchis à comment je veux organiser la salle.</ThemedText>
                </View>

                <QuestionExample text={`J'ai besoin d'un ordinateur`
                } titleExample={'Exemple'}            />

                <CustomButton
                    title="Suivant"
                    rightIcon='chevron-forward-outline'
                    handleOnPress={() => navigation.navigate('DayBefore')}
                    variant="primary"
                    style={{ marginTop: 24, marginBottom: 12 }}
                />
                <CustomButton
                    title="Précédent"
                    leftIcon='chevron-back-outline'
                    handleOnPress={navigation.goBack}
                    variant="secondary"
                />
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
