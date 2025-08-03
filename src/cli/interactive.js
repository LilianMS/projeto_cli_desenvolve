import readline from 'readline';
import { analisarSentimento } from '../services/sentiment.js';
import { 
	exibirBoasVindas,
	exibirResultado,
	exibirAnaliseEmProgresso,
	exibirDespedida,
	exibirAvisoTextoVazio,
	exibirErro,
	formatarPrompt
} from '../utils/display.js';

// ========================================
// MÓDULO CLI INTERATIVO - VINGADEVS
// ========================================

/**
 * Processa o input do usuário e executa a ação apropriada
 * @param {string} texto - Texto digitado pelo usuário
 * @param {Function} continuarLoop - Função para continuar o loop
 * @param {Object} rl - Interface readline
 */
async function processarInput(texto, continuarLoop, rl) {
	// Verificar se o usuário quer sair
	if (texto.toLowerCase() === 'sair') {
		exibirDespedida();
		rl.close();
		return;
	}

	// Verificar se o texto não está vazio
	if (!texto.trim()) {
		exibirAvisoTextoVazio();
		continuarLoop();
		return;
	}

	try {
		exibirAnaliseEmProgresso();
		const sentimento = await analisarSentimento(texto);
		exibirResultado(sentimento, texto);
	} catch (error) {
		exibirErro(error);
	}

	continuarLoop();
}

/**
 * Cria e gerencia o loop interativo principal
 * @param {Object} rl - Interface readline
 */
function criarLoopInterativo(rl) {
	const perguntarTexto = () => {
		rl.question(formatarPrompt(), async (texto) => {
			await processarInput(texto, perguntarTexto, rl);
		});
	};

	return perguntarTexto;
}

/**
 * Executa o modo interativo VingaDevs
 * @returns {Promise<void>}
 */
export async function executarModoInterativo() {
	exibirBoasVindas();

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	const loopInterativo = criarLoopInterativo(rl);
	loopInterativo();
}
