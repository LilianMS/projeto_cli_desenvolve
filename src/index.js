#!/usr/bin/env node
import { program } from 'commander';
import { executarAnalise } from './commands/analyzeCmd.js';
import { exibirErro, exibirAjuda } from './utils/display.js';

program
  .description('Analisa sentimentos em PT-BR usando DeepSeek')
  .argument('<texto>', 'Texto para análise')
  .action(executarAnalise);

// Exibe ajuda se nenhum argumento for fornecido
if (process.argv.length < 3) {
  exibirAjuda();
  process.exit(0);
}

program.parseAsync(process.argv).catch((error) => {
  if (error.code === 'commander.missingArgument') {
    exibirErro(`Erro: ${error.message}`);
    exibirAjuda();
  } else {
    exibirErro(error.message, error);
  }
  process.exit(1);
});


