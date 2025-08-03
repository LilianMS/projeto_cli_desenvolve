#!/usr/bin/env node

import {NlpManager} from 'node-nlp';
import {Command} from 'commander';
import chalk from 'chalk';

const program = new Command();

program
  .name('sentimento')
  .description('Análise de sentimento em português')
  .argument('<frase>', 'Frase a ser analisada')
  .action(async (frase) => {
    const manager = new NlpManager({ languages: ['pt'] });
    manager.addDocument('pt', frase, 'sentimento.analisar');
	
	// oculta logs de treinamento
	const originalLog = console.log;
	console.log = () => {}; // desativa logs
	await manager.train(false);
	console.log = originalLog; // ativa logs novamente

	const result = await manager.process('pt', frase);
	const { sentiment } = result;
	const sentimentoGlobal = sentiment.vote; // 'positive', 'negative', 'neutral'

	// Emojis padrão
	const emojiSentimento = {
		'positive': '😄',
		'negative': '😠',
		'neutral': '😐'
	};
	
    console.log(chalk.green('Resultado da análise de sentimento:'));
    console.log(emojiSentimento[sentimentoGlobal]);
  });

  program.parse();