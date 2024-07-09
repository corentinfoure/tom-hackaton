import { View, Text, StyleSheet, ScrollView } from "react-native";
import { EmotionsRouteParams } from "./Emotions.navigator";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { ThemedText } from "@/components/style/ThemedText";
import { QuestionExample } from "../SpeechCreate/QuestionExample";
import { CustomButton } from "@/components/shared/CustomButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FigureAndText } from "./FigureAndText";

type EmotionsProps = EmotionsRouteParams<'DayBefore'>;

export const DayBeforeScreen: React.FC<EmotionsProps> = ({ navigation, route }) => {

    const { top, bottom } = useSafeAreaInsets();

    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: "white",
            }}
            contentContainerStyle={{
                paddingHorizontal: 24,
                paddingTop: top,
                paddingBottom: bottom,
            }}
        >
                <ProgressBar currentStep={4} totalSteps={5} />
                <ThemedText type="title">⏰ La veille de mon discours</ThemedText>
                <FigureAndText figure={1} text={"Je vérifie sur mon programme et le matériel dont j’ai besoin."} />

                <QuestionExample text={`Voici une liste de matériel :
- Mes post-its
- Mon ordinateur
- Mon support`} titleExample={'Exemple'} />

                <CustomButton
                    title="Suivant"
                    rightIcon='chevron-forward-outline'
                    handleOnPress={() => navigation.navigate('Today')}
                    variant="primary"
                    style={{ marginTop: 24, marginBottom: 12 }} />
                <CustomButton
                    title="Précédent"
                    leftIcon='chevron-back-outline'
                    handleOnPress={navigation.goBack}
                    variant="secondary" />
            </ScrollView>
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