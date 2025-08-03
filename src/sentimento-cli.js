#!/usr/bin/env node

import 'dotenv/config';
import readline from 'readline';

main();

async function analisarSentimento(texto) {
    try {
        const response = await fetch(
            'https://api-inference.huggingface.co/models/nlptown/bert-base-multilingual-uncased-sentiment',
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ inputs: texto })
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Erro: ${errorData.error || response.statusText}`);
        }

        const data = await response.json();
        const resultado = data[0][0];

        let sentimento = '';
        switch (resultado.label) {
            case '1 star': sentimento = 'Muito Negativo'; break;
            case '2 stars': sentimento = 'Negativo'; break;
            case '3 stars': sentimento = 'Neutro'; break;
            case '4 stars': sentimento = 'Positivo'; break;
            case '5 stars': sentimento = 'Muito Positivo'; break;
            default: sentimento = 'Indefinido';
        }

        return `${sentimento}`;

    } catch (error) {
        throw new Error(`Erro ao analisar sentimento: ${error.message}`);
    }
}

async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Digite o texto para análise de sentimento: ', async (textoUsuario) => {
        if (!textoUsuario.trim()) {
            console.error("Você precisa digitar um texto.");
            rl.close();
            process.exit(1);
        }

        try {
            const resultado = await analisarSentimento(textoUsuario);
            console.log(`Resultado da Análise: ${resultado}`);
        } catch (error) {
            console.error(error.message);
        }

        rl.close();
    });
}
