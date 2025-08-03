import { CONFIG, SENTIMENT_MAPPING, MESSAGES } from '../config/constants.js';

// ========================================
// SERVIÇO DE ANÁLISE DE SENTIMENTO - VINGADEVS
// ========================================

/**
 * Mapeia os labels da API para sentimentos em português
 * @param {string} label - Label retornado pela API (ex: "1 star", "5 stars")
 * @returns {string} - Sentimento em português
 */
export function mapearSentimento(label) {
	return SENTIMENT_MAPPING[label] || 'Indefinido';
}

/**
 * Faz requisição para a API do Hugging Face
 * @param {string} texto - Texto a ser analisado
 * @returns {Promise<Object>} - Resposta da API
 */
export async function chamarApiHuggingFace(texto) {
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
 * Valida se a API key está configurada
 * @throws {Error} - Se a API key não estiver configurada
 */
export function validarApiKey() {
	if (!CONFIG.API_KEY) {
		throw new Error(MESSAGES.NO_API_KEY);
	}
}

/**
 * Valida se o texto está válido para análise
 * @param {string} texto - Texto a ser validado
 * @throws {Error} - Se o texto estiver vazio ou inválido
 */
export function validarTexto(texto) {
	if (!texto || !texto.trim()) {
		throw new Error('Texto não pode estar vazio');
	}
}

/**
 * Analisa o sentimento de um texto usando IA
 * @param {string} texto - Texto a ser analisado
 * @returns {Promise<string>} - Sentimento identificado
 */
export async function analisarSentimento(texto) {
	// Validações
	validarApiKey();
	validarTexto(texto);

	try {
		const data = await chamarApiHuggingFace(texto);
		const resultado = data[0][0]; // Pega o resultado com maior confiança
		return mapearSentimento(resultado.label);
	} catch (error) {
		throw new Error(`${MESSAGES.ERROR} ${error.message}`);
	}
}
