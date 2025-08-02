#!/usr/bin/env node

import { Command } from 'commander';
import { analisarSentimento } from './src/utils/nlp.js';
import { exibirMensagemAnalise, exibirResultado, tratarErro } from './src/utils/display.js';

// ========================================
// FUNÇÃO PRINCIPAL
// ========================================

/**
 * Executa a análise completa de sentimento
 * @param {string} frase - Frase a ser analisada
 */
async function executarAnalise(frase) {
	try {
		exibirMensagemAnalise();
		const sentimento = await analisarSentimento(frase);
		exibirResultado(sentimento);
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
  .description('Análise de sentimento em português')
  .version('1.0.0')
  .argument('<frase>', 'Frase a ser analisada')
  .action(executarAnalise);

program.parse();
