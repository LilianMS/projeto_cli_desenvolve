import 'dotenv/config';
import { CONFIG, MESSAGES } from '../config/constants.js';
import fetch from 'node-fetch'; // Importar node-fetch explicitamente

// Configurações específicas para OpenRouter (API)
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY; // Renomeie no .env quando for usar outra API
const HTTP_REFERER = 'https://github.com/LilianMS/projeto_cli_desenvolve/tree/leticia'; // Substitua pelo seu projeto

export async function analyzeSentiment(texto) {
  if (!OPENROUTER_API_KEY) throw new Error(MESSAGES.AUTH_ERROR);

  try {
    const response = await fetch(OPENROUTER_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': HTTP_REFERER, // Obrigatório para OpenRouter!
        'Content-Type': 'application/json',
        'X-Title': 'Análise de Sentimentos' // Opcional (identificação)
      },
      body: JSON.stringify({
        model: CONFIG.MODEL, // Modelo via OpenRouter
        messages: [{
          role: "user",
          content: `Analise o sentimento do texto (responda APENAS com "POSITIVO", "NEGATIVO" ou "NEUTRO"): "${texto}"`
        }],
        temperature: 0.3
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Erro na API');
    }

    const data = await response.json();
    const result = data.choices[0].message.content.trim().toUpperCase();

    // Mapeamento simples
    if (result.includes("POSITIVO")) return { sentimento: "positive", confianca: 0.9 };
    if (result.includes("NEGATIVO")) return { sentimento: "negative", confianca: 0.9 };
    return { sentimento: "neutral", confianca: 0.7 };

  } catch (error) {
    throw new Error(`${MESSAGES.API_ERROR}: ${error.message}`);
  }
}
