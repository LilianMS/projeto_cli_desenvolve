import { NlpManager } from 'node-nlp';
import { CONFIG } from '../config/constants.js';

// ========================================
// UTILITÁRIOS PARA NLP
// ========================================

/**
 * Silencia logs temporariamente durante execução de função assíncrona
 * @param {Function} asyncCallback - Função assíncrona a ser executada
 * @returns {Promise} - Resultado da função executada
 */
export async function silenciarLogsAsync(asyncCallback) {
	const originalLog = console.log;
	console.log = () => {}; // desativa logs
	const result = await asyncCallback();
	console.log = originalLog; // ativa logs novamente
	return result;
}

/**
 * Cria e configura uma nova instância do NlpManager
 * @returns {NlpManager} - Instância configurada do NlpManager
 */
export function criarNlpManager() {
	return new NlpManager({ languages: [CONFIG.LANGUAGE] });
}

/**
 * Treina o modelo com a frase fornecida
 * @param {NlpManager} manager - Instância do NlpManager
 * @param {string} frase - Frase para treinar o modelo
 */
export async function treinarModelo(manager, frase) {
	manager.addDocument(CONFIG.LANGUAGE, frase, CONFIG.SENTIMENT_INTENT);
	await silenciarLogsAsync(() => manager.train(false));
}

/**
 * Analisa o sentimento de uma frase
 * @param {string} frase - Frase a ser analisada
 * @returns {Promise<string>} - Sentimento analisado ('positive', 'negative', 'neutral')
 */
export async function analisarSentimento(frase) {
	const manager = criarNlpManager();
	await treinarModelo(manager, frase);
	
	const result = await manager.process(CONFIG.LANGUAGE, frase);
	return result.sentiment.vote;
}
