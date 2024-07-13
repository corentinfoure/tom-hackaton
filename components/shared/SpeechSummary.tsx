import { Idea } from "@/app/SpeechCreate/CreateIdea";
import { QuestionExample } from "@/app/SpeechCreate/QuestionExample";
import { Speech } from "@/app/SpeechCreate/hooks/useSpeech";
import { ThemedText } from "../style/ThemedText";
import { Card } from "./Card";

type SpeechSummaryProps = {
  speech: Speech;
};

export const SpeechSummary: React.FC<SpeechSummaryProps> = ({ speech }) => {
  return (
    <>
      <ThemedText type="title">{speech.title}</ThemedText>
      <Card
        title={"Ma présentation"}
        style={{ marginTop: 16 }}
        value={`Je m'appelle ${speech.name} et j'ai ${speech.age} ans.\nDans la vie je suis ${speech.occupations}.`}
      />
      <Card
        title={"Je vais vous parler de"}
        value={`Mon sujet: ${speech.subject}\nMon public: ${speech.publicAudience}`}
        style={{ marginTop: 16 }}
      />
      <Card
        title={"Mes idées"}
        value={(JSON.parse(speech.ideas) as Idea[])
          .map(
            (idea, index) =>
              `Idée #${index + 1}: ${idea.idea}\nExemple: ${idea.example}`
          )
          .join("\n\n")}
        style={{ marginTop: 16 }}
      />
      <Card
        title={"Mon idée forte"}
        value={speech.strongMessage}
        style={{ marginTop: 16 }}
      />
      <QuestionExample
        titleExample="Conseil"
        style={{ marginTop: 16 }}
        text={`Je n'oublies pas de remercier mon audience pour finir mon discours.\n\nExemple : Merci de m'avoir écouté. J'espère que vous avez aimé entendre parler de mon sujet sur le travail.`}
      />
    </>
  );
};
