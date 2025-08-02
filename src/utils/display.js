import chalk from 'chalk';
import { EMOJIS_SENTIMENTO, MESSAGES } from '../config/constants.js';

// ========================================
// FUNÇÕES DE INTERFACE DE USUÁRIO
// ========================================

/**
 * Exibe mensagem de carregamento/análise
 */
export function exibirMensagemAnalise() {
	console.log(chalk.yellow(MESSAGES.ANALYZING));
}

/**
 * Exibe o resultado da análise de sentimento
 * @param {string} sentimento - Sentimento analisado
 */
export function exibirResultado(sentimento) {
	console.log(chalk.green(MESSAGES.RESULT));
	console.log(EMOJIS_SENTIMENTO[sentimento]);
}

/**
 * Trata e exibe erros
 * @param {Error} error - Erro a ser tratado
 */
export function tratarErro(error) {
	console.error(chalk.red(MESSAGES.ERROR), error.message);
	process.exit(1);
}
