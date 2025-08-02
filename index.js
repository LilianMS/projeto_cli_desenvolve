#!/usr/bin/env node

import {NlpManager} from 'node-nlp';
import {Command} from 'commander';
import chalk from 'chalk';

// Configurações e constantes
const EMOJIS_SENTIMENTO = {
	'positive': '😄',
	'negative': '😠',
	'neutral': '😐'
};

// Função para silenciar logs temporariamente (para funções assíncronas)
async function silenciarLogsAsync(asyncCallback) {
	const originalLog = console.log;
	console.log = () => {}; // desativa logs
	const result = await asyncCallback();
	console.log = originalLog; // ativa logs novamente
	return result;
}

// Função para criar e configurar o manager NLP
function criarNlpManager() {
	return new NlpManager({ languages: ['pt'] });
}

// Função para treinar o modelo
async function treinarModelo(manager, frase) {
	manager.addDocument('pt', frase, 'sentimento.analisar');
	await silenciarLogsAsync(() => manager.train(false));
}

// Função para analisar sentimento
async function analisarSentimento(frase) {
	console.log(chalk.yellow('Analisando... Aguarde 🧠'));
	
	const manager = criarNlpManager();
	await treinarModelo(manager, frase);
	
	const result = await manager.process('pt', frase);
	return result.sentiment.vote;
}

// Função para exibir resultado
function exibirResultado(sentimento) {
	console.log(chalk.green('Resultado:'));
	console.log(EMOJIS_SENTIMENTO[sentimento]);
}

// Configuração do programa CLI
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
		console.error(chalk.red('Erro ao analisar sentimento:'), error.message);
		process.exit(1);
	}
  });

  program.parse();


  // pra depois rsrs https://api.github.com/emojis