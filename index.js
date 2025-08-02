#!/usr/bin/env node

import {NlpManager} from 'node-nlp';
import {Command} from 'commander';
import chalk from 'chalk';

const program = new Command();

program
  .name('sentimento')
  .description('Análise de sentimento em português')
  .argument('<frase>', 'Frase a ser analisada')
  .action((frase) => {
    const manager = new NlpManager({ languages: ['pt'] });
    manager.addDocument('pt', frase, 'sentimento.analisar');
    manager.train().then(() => {
      manager.process('pt', frase).then((result) => {
        console.log(chalk.green('Resultado da análise de sentimento:'));
        console.log(result.sentiment.vote);
      });
    });
  });

  program.parse();