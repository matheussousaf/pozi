import { NlpManager } from "node-nlp";

interface Sentence {
  phrase: string;
  intent: string;
}

const manager = new NlpManager({ languages: ["pt"] });

trainNaturalLanguageProcessor();

export function trainNaturalLanguageProcessor() {
  trainSentence(
    [
      { phrase: "oi", intent: "greetings.hello" },
      { phrase: "oii oi", intent: "greetings.hello" },
      { phrase: "oii", intent: "greetings.hello" },
      { phrase: "ola", intent: "greetings.hello" },
      { phrase: "olá", intent: "greetings.hello" },
      { phrase: "opa", intent: "greetings.hello" },
      { phrase: "eai", intent: "greetings.hello" },
      { phrase: "fala", intent: "greetings.hello" },
      { phrase: "eaew", intent: "greetings.hello" },
    ],
    [
      {
        phrase:
          "Fala camarada! Já vou me introduzindo... Eu sou o Pozi, um robô feito pra ajudar na vida do caminhoneiro 🚛!" +
          "Comigo tu consegue fazer de tudo:\n" +
          "- Consigo *criar sua conta* na nossa plataforma 🚚 \n" +
          "- Te ajudo a manter tua *saúde*, e nem precisa me agradecer! 🚑 🏥\n" +
          "- Te passo os melhores lugares pra você ficar na estrada, shh não espalha!  🛏 🍔 🛀 \n" +
          "Enfim, tou aqui pra o que tu precisar, precisou é só falar!",
        intent: "greetings.hello",
      },
    ]
  );

  trainSentence(
    [
      { phrase: "sair", intent: "greetings.bye" },
      { phrase: "flw", intent: "greetings.bye" },
      { phrase: "xauu", intent: "greetings.bye" },
      { phrase: "tchau", intent: "greetings.bye" },
      { phrase: "bye", intent: "greetings.bye" },
      { phrase: "xauxau", intent: "greetings.bye" },
      { phrase: "tchauzinho", intent: "greetings.bye" },
      { phrase: "te mais", intent: "greetings.bye" },
      { phrase: "vou ter que sair", intent: "greetings.bye" },
      { phrase: "xau", intent: "greetings.bye" },
    ],
    [
      {
        phrase:
          "Tudo bem, até mais! Eu tinha que recalibrar meus pneus mesmo...",
        intent: "greetings.bye",
      },
      {
        phrase:
          "Até mais! Vou aproveitar pra adiantar o meu lado aqui no tapetão 🚚",
        intent: "greetings.bye",
      },
    ]
  );

  trainSentence(
    [
      { phrase: "criar conta", intent: "register.account" },
      { phrase: "registrar", intent: "register.account" },
      { phrase: "registro", intent: "register.account" },
      { phrase: "quero registrar", intent: "register.account" },
      { phrase: "quero cadastrar", intent: "register.account" },
      { phrase: "cadastro", intent: "register.account" },
    ],
    [
      {
        phrase:
          "Você quer criar uma conta? Bom demais! Só precisa me dizer teu *nome*, aí eu vou agilizando as coisas por aqui.",
        intent: "register.account",
      },
      {
        phrase:
          "Vamo criar essa conta! Qual teu *nome*? Só me dizer que eu crio pra ontem!",
        intent: "register.account",
      },
    ]
  );

  trainSentence(
    [
      { phrase: "saúde", intent: "health.advice" },
      { phrase: "dica de saúde", intent: "health.advice" },
      { phrase: "saber sobre saúde", intent: "health.advice" },
    ],
    [
      {
        phrase:
          "Rapaz, uma dica de saúde? Uma vez ouvi um médico famoso falar que beber dois litros d'água por dia faz bem pra saúde," +
          " mas eu sou um robô, tenho certeza que aquele picareta tava tentando me enganar 😤",
        intent: "health.advice",
      },
      {
        phrase:
          "Essa é fácil! Só comer de três em três horas... saco vazio não fica em pé. 🍲",
        intent: "health.advice",
      },
      {
        phrase:
          "Pra a gente que passa a vida nesse tapetão é difícil, mas sempre que der tira uma sonequinha! Eu não troco por nada.",
        intent: "health.advice",
      },
    ]
  );
}

async function trainSentence(sentences: Sentence[], trainPhrases: Sentence[]) {
  sentences.map((sentence: Sentence) => {
    const { phrase, intent } = sentence;
    manager.addDocument("pt", phrase, intent);
  });

  trainPhrases.map((trainPhrase: Sentence) => {
    const { phrase, intent } = trainPhrase;
    manager.addAnswer("pt", intent, phrase);
  });

  await manager.train();
  manager.save();
}

function randomNumber(from: number, to: number) {
  return Math.floor(Math.random() * to) + from;
}

export async function getResponse(phrase: string) {
  const response = await manager.process("pt", phrase);

  console.log(response);
  if (!response.answer && response.intent === "None") {
    const responses = [
      "Eita, não entendi o que você falou",
      "Rapaz, tô ficando biruta! Não entendi foi nada.",
      "Não entendi... 🤔",
    ];

    return responses[randomNumber(0, 3)];
  } else {
    switch (response.intent) {
      case "register.account":
        return response.answers[randomNumber(0, 1)].answer;
        break;
      case "health.advice":
        return response.answers[randomNumber(0, 3)].answer;
        break;
      default:
        return response.answer;
    }
  }
}
