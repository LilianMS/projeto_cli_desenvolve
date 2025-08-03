#!/usr/bin/env node

import 'dotenv/config';
import { Command } from 'commander';
import chalk from 'chalk';

// ========================================
// CONFIGURAÇÕES E CONSTANTES
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
	ANALYZING: 'Analisando sentimento com IA... 🧠',
	RESULT: 'Resultado da Análise:',
	ERROR: 'Erro ao analisar sentimento:',
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
// FUNÇÕES DE INTERFACE
// ========================================

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
function tratarErro(error) {
	console.log('\n' + '❌'.repeat(20));
	console.error(chalk.red('💥 ' + error.message));
	
	if (error.message.includes('API_KEY')) {
		console.log(chalk.yellow('\n💡 Dica: Crie um arquivo .env com:'));
		console.log(chalk.gray('HUGGINGFACE_API_KEY=seu_token_aqui'));
		console.log(chalk.gray('Obtenha o token em: https://huggingface.co/settings/tokens'));
	}
	
	console.log('❌'.repeat(20) + '\n');
	process.exit(1);
}

// ========================================
// FUNÇÃO PRINCIPAL
// ========================================

/**
 * Executa a análise completa de sentimento
 * @param {string} texto - Texto a ser analisado
 */
async function executarAnalise(texto) {
	try {
		console.log(chalk.yellow('🔄 ' + MESSAGES.ANALYZING));
		const sentimento = await analisarSentimento(texto);
		exibirResultado(sentimento, texto);
	} catch (error) {
		tratarErro(error);
	}
}

// ========================================
// CONFIGURAÇÃO CLI
// ========================================

const program = new Command();

program
	.name('sentimento')
	.description('🤖 Análise de sentimento com IA do Hugging Face')
	.version('2.0.0')
	.argument('<texto>', 'Texto a ser analisado')
	.option('-v, --verbose', 'Exibir informações detalhadas')
	.action(async (texto, options) => {
		if (options.verbose) {
			console.log(chalk.gray('🔧 Usando modelo: nlptown/bert-base-multilingual-uncased-sentiment'));
			console.log(chalk.gray('🌐 API: Hugging Face Inference API\n'));
		}
		await executarAnalise(texto);
	});

// Comando adicional para modo interativo - versão da Alicia adaptada
program
	.command('interativo')
	.alias('i')
	.description('🗣️  Modo interativo para análise de sentimento')
	.action(async () => {
		const readline = await import('readline');
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});

		console.log(chalk.cyan('🤖 Modo Interativo - Análise de Sentimento'));
		console.log(chalk.gray('Digite "sair" para encerrar\n'));

		const perguntarTexto = () => {
			rl.question(chalk.blue('💬 Digite o texto para análise: '), async (texto) => {
				if (texto.toLowerCase() === 'sair') {
					console.log(chalk.green('👋 Até logo!'));
					rl.close();
					return;
				}

				if (!texto.trim()) {
					console.log(chalk.red('⚠️  Você precisa digitar um texto.'));
					perguntarTexto();
					return;
				}

				try {
					console.log(chalk.yellow('🔄 ' + MESSAGES.ANALYZING));
					const sentimento = await analisarSentimento(texto);
					exibirResultado(sentimento, texto);
				} catch (error) {
					console.error(chalk.red('💥 ' + error.message));
				}

				perguntarTexto();
			});
		};

		perguntarTexto();
	});

program.parse();
