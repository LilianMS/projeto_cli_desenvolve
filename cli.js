import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.LLAMA_API_KEY,
})

async function main(frase) {
  const completion = await openai.chat.completions.create({
    model: "meta-llama/llama-3.3-70b-instruct:free",
    messages: [
      {
        role: "user",
        content: `Irei te passar uma frase e seu objetivo é identificar se essa frase possui um contéudo positivo ou negativo e me indicar dizendo estritamente apenas uma das opções abaixo:
        "Sua frase possui um sentimento positivo" acompanhado de uma carinha feliz formada por caracteres ou "Sua frase possui um setimento negativo" acompanhado de uma carinha triste foramada por caracteres, caso você não consiga identificar o sentimento da frase responda: "Infelizmente, não consegui identificar o sentimento da sua frase, tente novamente com outra frase" 
        Irei te enviar a frase agora: ${frase}`,
      },
    ],
  })

  console.log(completion.choices[0].message.content)
}

main("Hoje o dia está lindo")
