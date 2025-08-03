import chalk from 'chalk';
import { MESSAGES, EMOJIS_SENTIMENTO } from '../config/constants.js';

// ========================================
// UTILITÁRIOS DE INTERFACE - VINGADEVS UX
// ========================================

/**
 * Exibe o cabeçalho de boas-vindas da VingaDevs
 */
export function exibirBoasVindas() {
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
export function exibirResultado(sentimento, textoOriginal) {
	console.log('\n' + '='.repeat(50));
	console.log(chalk.cyan('📝 Texto analisado:'), chalk.white(`"${textoOriginal}"`));
	console.log(chalk.green('🎯 ' + MESSAGES.RESULT), chalk.bold.yellow(sentimento));
	console.log(chalk.green('😊 Emoji:'), EMOJIS_SENTIMENTO[sentimento]);
	console.log('='.repeat(50) + '\n');
}

/**
 * Exibe mensagem de análise em progresso
 */
export function exibirAnaliseEmProgresso() {
	console.log(chalk.yellow('🔄 ' + MESSAGES.ANALYZING));
}

/**
 * Exibe mensagem de despedida
 */
export function exibirDespedida() {
	console.log(chalk.green('\n' + MESSAGES.GOODBYE));
}

/**
 * Exibe aviso de texto vazio
 */
export function exibirAvisoTextoVazio() {
	console.log(chalk.red('⚠️  ' + MESSAGES.EMPTY_TEXT));
}

/**
 * Trata e exibe erros de forma amigável
 * @param {Error} error - Erro a ser tratado
 */
export function exibirErro(error) {
	console.log('\n' + '❌'.repeat(20));
	console.error(chalk.red('💥 ' + error.message));
	
	if (error.message.includes('API_KEY')) {
		console.log(chalk.yellow('\n💡 Dica VingaDevs: Crie um arquivo .env com:'));
		console.log(chalk.gray('HUGGINGFACE_API_KEY=seu_token_aqui'));
		console.log(chalk.gray('Obtenha o token em: https://huggingface.co/settings/tokens'));
	}
	
	console.log('❌'.repeat(20) + '\n');
}

/**
 * Formata o prompt de entrada para o usuário
 * @returns {string} - Prompt formatado
 */
export function formatarPrompt() {
	return chalk.blue('💬 ' + MESSAGES.PROMPT);
}
