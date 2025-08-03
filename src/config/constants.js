// ========================================
// CONFIGURAÇÕES E CONSTANTES - VINGADEVS
// ========================================

export const CONFIG = {
	API_URL: 'https://api-inference.huggingface.co/models/nlptown/bert-base-multilingual-uncased-sentiment',
	API_KEY: process.env.HUGGINGFACE_API_KEY
};

export const EMOJIS_SENTIMENTO = {
	'Muito Negativo': '😡',
	'Negativo': '😠',
	'Neutro': '😐',
	'Positivo': '😄',
	'Muito Positivo': '🤩',
	'Indefinido': '❓'
};

export const MESSAGES = {
	WELCOME: '🤖 VingaDevs - Análise de Sentimento com IA',
	SUBTITLE: 'Bem-vindo ao nosso analisador inteligente!',
	INSTRUCTIONS: 'Digite "sair" para encerrar',
	ANALYZING: 'Analisando sentimento com IA... 🧠',
	RESULT: 'Resultado da Análise:',
	ERROR: 'Erro ao analisar sentimento:',
	GOODBYE: 'Obrigado por usar o VingaDevs CLI! Até logo! 👋',
	PROMPT: 'Digite o texto para análise: ',
	EMPTY_TEXT: 'Você precisa digitar um texto.',
	NO_API_KEY: 'ERRO: Chave da API do Hugging Face não encontrada. Configure HUGGINGFACE_API_KEY no arquivo .env'
};

export const SENTIMENT_MAPPING = {
	'1 star': 'Muito Negativo',
	'2 stars': 'Negativo', 
	'3 stars': 'Neutro',
	'4 stars': 'Positivo',
	'5 stars': 'Muito Positivo'
};
