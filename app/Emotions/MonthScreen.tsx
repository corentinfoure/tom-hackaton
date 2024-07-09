import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { EmotionsRouteParams } from './Emotions.navigator';
import { ProgressBar } from '@/components/shared/ProgressBar';
import { QuestionTemplate } from '../SpeechCreate/QuestionTemplate'
import { ThemedText } from '@/components/style/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import { CustomButton } from '@/components/shared/CustomButton';
import { QuestionExample } from '../SpeechCreate/QuestionExample';

type EmotionsProps = EmotionsRouteParams<'Month'>;

export const MonthScreen: React.FC<EmotionsProps> = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView>
                <ProgressBar currentStep={2} totalSteps={5} />
                <ThemedText type="title">Un mois avant</ThemedText>
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
                <View style={styles.textAndFigureContainer}>
                    <View style={styles.figureContainer}>
                        <Text style={styles.figure}>3</Text>
                    </View>
                    <ThemedText type="subtitle">Je décide où je veux être pendant mon intervention.</ThemedText>
                </View>

                <QuestionExample text={`je peux être :
        - Debout face à mon public
        - Assis sur une chaise à côté de mon public
        - Assis derrière une table`
                } titleExample={'Exemple'}            />

                <CustomButton
                    title="Suivant"
                    rightIcon='chevron-forward-outline'
                    handleOnPress={() => navigation.navigate('Week')}
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