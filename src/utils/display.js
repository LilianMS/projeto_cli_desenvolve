import chalk from 'chalk';
import { MESSAGES, SENTIMENT_EMOJIS, SENTIMENT_LABELS } from '../config/constants.js';

/**
 * Exibe mensagem de carregamento/análise.
 */
export function exibirMensagemAnalise() {
  console.log(chalk.yellow(MESSAGES.ANALYZING));
}

/**
 * Exibe o resultado da análise de sentimento.
 * @param {string} sentimento - Sentimento analisado ('positive', 'negative', 'neutral', 'unknown')
 * @param {number} confianca - Nível de confiança da análise (0-1)
 */
export function exibirResultado(sentimento, confianca = null) {
  console.log(chalk.green(MESSAGES.RESULT_PREFIX));
  
  const emoji = SENTIMENT_EMOJIS[sentimento] || SENTIMENT_EMOJIS.unknown;
  const label = SENTIMENT_LABELS[sentimento] || SENTIMENT_LABELS.unknown;
  
  console.log(`${emoji} ${chalk.bold(label)}`);
  
  if (confianca !== null) {
    const porcentagem = Math.round(confianca * 100);
    const cor = porcentagem >= 80 ? 'green' : porcentagem >= 60 ? 'yellow' : 'red';
    console.log(chalk[cor](`Confiança: ${porcentagem}%`));
  }
}

/**
 * Exibe mensagem de erro formatada.
 * @param {string} mensagem - Mensagem de erro.
 * @param {Error} erro - Objeto de erro (opcional).
 */
export function exibirErro(mensagem, erro = null) {
  console.error(chalk.red(`❌ ${mensagem}`));
  
  // Exibe o stack trace completo em ambiente de desenvolvimento
  if (erro && process.env.NODE_ENV === 'development') {
    console.error(chalk.gray(erro.stack));
  }
}

/**
 * Exibe informações sobre o uso da aplicação.
 */
export function exibirAjuda() {
  console.log(chalk.cyan('\n📖 Como usar:'));
  console.log('  node src/index.js "sua frase aqui"');
  console.log('\n📝 Exemplos:');
  console.log('  node src/index.js "Estou muito feliz hoje!"');
  console.log('  node src/index.js "Que dia terrível..."');
  console.log('  node src/index.js "O tempo está normal."');
}

/**
 * Exibe mensagem de sucesso.
 * @param {string} mensagem - Mensagem de sucesso.
 */
export function exibirSucesso(mensagem) {
  console.log(chalk.green(`✅ ${mensagem}`));
}

/**
 * Exibe mensagem de aviso.
 * @param {string} mensagem - Mensagem de aviso.
 */
export function exibirAviso(mensagem) {
  console.log(chalk.yellow(`⚠️  ${mensagem}`));
}