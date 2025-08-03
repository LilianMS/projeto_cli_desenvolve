#!/usr/bin/env node

import 'dotenv/config';
import { executarModoInterativo } from './src/cli/interactive.js';
import { validarApiKey } from './src/services/sentiment.js';
import { exibirErro } from './src/utils/display.js';

// ========================================
// VINGADEVS CLI - PONTO DE ENTRADA PRINCIPAL
// ========================================

/**
 * Função principal da aplicação VingaDevs
 * Coordena a inicialização e execução do CLI
 */
async function main() {
	try {
		// Validar API key antes de iniciar
		validarApiKey();
		
		// Iniciar modo interativo
		await executarModoInterativo();
		
	} catch (error) {
		exibirErro(error);
		process.exit(1);
	}
}

// ========================================
// INICIALIZAÇÃO
// ========================================

// Executar aplicação principal
main().catch((error) => {
	exibirErro(error);
	process.exit(1);
});
