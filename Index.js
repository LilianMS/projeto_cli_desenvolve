console.log('Token carregado:', process.env.HF_TOKEN);
// @ts-nocheck
//#!/usr/bin/env node

import 'dotenv/config';
import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_TOKEN);
import chalk from 'chalk';

(async () => {
})();
const emotion = process.argv[2];


if (!emotion) {
  console.log(chalk.red("❗ Digite uma emoção ou sentimento. Ex:"));
  console.log("   emotion-check gratidão");
  process.exit(1);
}

const prompt = `Você é um classificador de sentimentos. Classifique a palavra "${emotion}" como positiva, negativa ou neutra.
Dê a resposta exatamente neste formato:

Classificação: <positiva|negativa|neutra>
Justificativa: <explicação simples>
`;

(async () => {
try {
  const response = await client.textClassification({
  model: "distilbert-base-uncased-finetuned-sst-2-english",
  inputs: emotion
});

const resultado = response[0];
const classificacao = resultado.label.toLowerCase();
const confianca = (resultado.score * 100).toFixed(2) + "%";

let cor = chalk.gray;
if (classificacao.includes("positive")) cor = chalk.green;
else if (classificacao.includes("negative")) cor = chalk.red;
else if (classificacao.includes("neutral")) cor = chalk.yellow;

console.log(`\n Emoção analisada: ${chalk.bold(emotion)}`);
console.log(` Classificação: ${cor(` ${classificacao}`)}`);
console.log(` Confiança: ${chalk.cyan(confianca)}\n`);

  } catch (err) {
    console.error(chalk.red(" Erro ao chamar a API:"), err.message);
  }
})();
