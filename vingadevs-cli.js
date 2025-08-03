#!/usr/bin/env node

import 'dotenv/config';
import chalk from 'chalk';
import readline from 'readline';

// ========================================
// CONFIGURAÇÕES E CONSTANTES - VINGADEVS
// ========================================

const CONFIG = {
	API_URL: 'https://api-inference.huggingface.co/models/nlptown/bert-base-multilingual-uncased-sentiment',
	API_KEY: process.env.HUGGINGFACE_API_KEY
};

const EMOJIS_SENTIMENTO = {
	'Muito Negativo': '😡',
	'Negativo': '😠',
	'Neutro': '😐',
	'Positivo': '😄',
	'Muito Positivo': '🤩',
	'Indefinido': '❓'
};

const MESSAGES = {
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

// ========================================
// FUNÇÕES DE ANÁLISE (API HUGGING FACE)
// ========================================

/**
 * Mapeia os labels da API para sentimentos em português
 * @param {string} label - Label retornado pela API (ex: "1 star", "5 stars")
 * @returns {string} - Sentimento em português
 */
function mapearSentimento(label) {
	const mapeamento = {
		'1 star': 'Muito Negativo',
		'2 stars': 'Negativo', 
		'3 stars': 'Neutro',
		'4 stars': 'Positivo',
		'5 stars': 'Muito Positivo'
	};
	return mapeamento[label] || 'Indefinido';
}

/**
 * Faz requisição para a API do Hugging Face
 * @param {string} texto - Texto a ser analisado
 * @returns {Promise<Object>} - Resposta da API
 */
async function chamarApiHuggingFace(texto) {
	const response = await fetch(CONFIG.API_URL, {
		method: 'POST',
		headers: {
			'Authorization': `Bearer ${CONFIG.API_KEY}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ inputs: texto })
	});

	if (!response.ok) {
		const errorData = await response.json().catch(() => ({}));
		throw new Error(`API Error: ${errorData.error || response.statusText}`);
	}

	return await response.json();
}

/**
 * Analisa o sentimento de um texto usando IA
 * @param {string} texto - Texto a ser analisado
 * @returns {Promise<string>} - Sentimento identificado
 */
async function analisarSentimento(texto) {
	if (!CONFIG.API_KEY) {
		throw new Error(MESSAGES.NO_API_KEY);
	}

	if (!texto || !texto.trim()) {
		throw new Error('Texto não pode estar vazio');
	}

	try {
		const data = await chamarApiHuggingFace(texto);
		const resultado = data[0][0]; // Pega o resultado com maior confiança
		return mapearSentimento(resultado.label);
	} catch (error) {
		throw new Error(`${MESSAGES.ERROR} ${error.message}`);
	}
}

// ========================================
// FUNÇÕES DE INTERFACE - VINGADEVS UX
// ========================================

/**
 * Exibe o cabeçalho de boas-vindas da VingaDevs
 */
function exibirBoasVindas() {
	console.log('\n' + '='.repeat(60));
	console.log(chalk.cyan.bold(MESSAGES.WELCOME));
	console.log(chalk.gray(MESSAGES.SUBTITLE));
	console.log(chalk.yellow(MESSAGES.INSTRUCTIONS));
	console.log('='.repeat(60) + '\n');
}

/**
 * Exibe o resultado da análise de sentimento
 * @param {string} sentimento - Sentimento identificado
 * @param {string} textoOriginal - Texto que foi analisado
 */
function exibirResultado(sentimento, textoOriginal) {
	console.log('\n' + '='.repeat(50));
	console.log(chalk.cyan('📝 Texto analisado:'), chalk.white(`"${textoOriginal}"`));
	console.log(chalk.green('🎯 ' + MESSAGES.RESULT), chalk.bold.yellow(sentimento));
	console.log(chalk.green('😊 Emoji:'), EMOJIS_SENTIMENTO[sentimento]);
	console.log('='.repeat(50) + '\n');
}

/**
 * Trata e exibe erros de forma amigável
 * @param {Error} error - Erro a ser tratado
 */
function exibirErro(error) {
	console.log('\n' + '❌'.repeat(20));
	console.error(chalk.red('💥 ' + error.message));
	
	if (error.message.includes('API_KEY')) {
		console.log(chalk.yellow('\n💡 Dica VingaDevs: Crie um arquivo .env com:'));
		console.log(chalk.gray('HUGGINGFACE_API_KEY=seu_token_aqui'));
		console.log(chalk.gray('Obtenha o token em: https://huggingface.co/settings/tokens'));
	}
	
	console.log('❌'.repeat(20) + '\n');
}

// ========================================
// FUNÇÃO PRINCIPAL - MODO INTERATIVO
// ========================================

/**
 * Executa o modo interativo VingaDevs
 */
async function executarModoInterativo() {
	// Verificar API key antes de iniciar
	if (!CONFIG.API_KEY) {
		exibirErro(new Error(MESSAGES.NO_API_KEY));
		process.exit(1);
	}

	exibirBoasVindas();

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	const perguntarTexto = () => {
		rl.question(chalk.blue('💬 ' + MESSAGES.PROMPT), async (texto) => {
			// Verificar se o usuário quer sair
			if (texto.toLowerCase() === 'sair') {
				console.log(chalk.green('\n' + MESSAGES.GOODBYE));
				rl.close();
				return;
			}

			// Verificar se o texto não está vazio
			if (!texto.trim()) {
				console.log(chalk.red('⚠️  ' + MESSAGES.EMPTY_TEXT));
				perguntarTexto();
				return;
			}

			try {
				console.log(chalk.yellow('🔄 ' + MESSAGES.ANALYZING));
				const sentimento = await analisarSentimento(texto);
				exibirResultado(sentimento, texto);
			} catch (error) {
				exibirErro(error);
			}

			perguntarTexto();
		});
	};

	perguntarTexto();
}

// ========================================
// PONTO DE ENTRADA
// ========================================

// Iniciar o modo interativo VingaDevs
executarModoInterativo().catch((error) => {
	exibirErro(error);
	process.exit(1);
});
