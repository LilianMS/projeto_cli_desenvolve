#!/usr/bin/env node

import {NlpManager} from 'node-nlp';
import {Command} from 'commander';
import chalk from 'chalk';

// ========================================
// CONFIGURAÇÕES E CONSTANTES
// ========================================

const CONFIG = {
	LANGUAGE: 'pt',
	SENTIMENT_INTENT: 'sentimento.analisar'
};

const EMOJIS_SENTIMENTO = {
	'positive': '😄',
	'negative': '😠',
	'neutral': '😐'
};

const MESSAGES = {
	ANALYZING: 'Analisando... Aguarde 🧠',
	RESULT: 'Resultado:',
	ERROR: 'Erro ao analisar sentimento:'
};

// ========================================
// UTILITÁRIOS
// ========================================

// Função para silenciar logs temporariamente (para funções assíncronas)
async function silenciarLogsAsync(asyncCallback) {
	const originalLog = console.log;
	console.log = () => {}; // desativa logs
	const result = await asyncCallback();
	console.log = originalLog; // ativa logs novamente
	return result;
}

// ========================================
// FUNÇÕES DE ANÁLISE DE SENTIMENTO
// ========================================

// Função para criar e configurar o manager NLP
function criarNlpManager() {
	return new NlpManager({ languages: [CONFIG.LANGUAGE] });
}

// Função para treinar o modelo
async function treinarModelo(manager, frase) {
	manager.addDocument(CONFIG.LANGUAGE, frase, CONFIG.SENTIMENT_INTENT);
	await silenciarLogsAsync(() => manager.train(false));
}

// Função para analisar sentimento
async function analisarSentimento(frase) {
	console.log(chalk.yellow(MESSAGES.ANALYZING));
	
	const manager = criarNlpManager();
	await treinarModelo(manager, frase);
	
	const result = await manager.process(CONFIG.LANGUAGE, frase);
	return result.sentiment.vote;
}

// ========================================
// FUNÇÕES DE INTERFACE
// ========================================

// Função para exibir resultado
function exibirResultado(sentimento) {
	console.log(chalk.green(MESSAGES.RESULT));
	console.log(EMOJIS_SENTIMENTO[sentimento]);
}

// Função para tratar erros
function tratarErro(error) {
	console.error(chalk.red(MESSAGES.ERROR), error.message);
	process.exit(1);
}

// ========================================
// CONFIGURAÇÃO CLI
// ========================================

const program = new Command();

program
  .name('sentimento')
  .description('Análise de sentimento em português')
  .argument('<frase>', 'Frase a ser analisada')
  .action(async (frase) => {
	try {
		const sentimento = await analisarSentimento(frase);
		exibirResultado(sentimento);
	} catch (error) {
		tratarErro(error);
	}
  });

program.parse();

// ========================================
// NOTAS PARA DESENVOLVIMENTO FUTURO
// ========================================
// TODO: Implementar integração com API do GitHub para emojis personalizados
// Referência: https://api.github.com/emojis