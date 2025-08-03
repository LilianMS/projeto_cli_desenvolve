import { analyzeSentiment } from '../services/sentimentService.js';
import { validarTexto, sanitizarTexto } from '../utils/sentimentValidation.js';
import { exibirResultado, exibirErro, exibirMensagemAnalise } from '../utils/display.js';
import { CONFIG, MESSAGES } from '../config/constants.js';

/**
 * Executa a análise de sentimento.
 * @param {string} texto
 */
export async function executarAnalise(textoBruto) {
  try {
    // 1. Validação da entrada
    const { valido, erro } = validarTexto(textoBruto);
    if (!valido) {
      exibirErro(`${MESSAGES.INVALID_TEXT}: ${erro}`);
      return;
    }

    // 2. Sanitização do texto
    const textoSanitizado = sanitizarTexto(textoBruto);

    // 3. Exibir mensagem de análise
    exibirMensagemAnalise();

    // 4. Chamar o serviço de análise de sentimento (com retries)
    let resultadoAnalise = null;
    let tentativas = 0;
    while (tentativas < CONFIG.MAX_RETRIES) {
      try {
        resultadoAnalise = await analyzeSentiment(textoSanitizado);
        break; // Sai do loop se a chamada for bem-sucedida
      } catch (apiError) {
        tentativas++;
        if (tentativas < CONFIG.MAX_RETRIES) {
          exibirErro(`Tentativa ${tentativas} falhou: ${apiError.message}. Retentando...`);
          // Opcional: adicionar um delay antes de retentar
          await new Promise(resolve => setTimeout(resolve, 1000 * tentativas)); // Espera 1s, depois 2s...
        } else {
          throw apiError; // Lança o erro após todas as tentativas falharem
        }
      }
    }

    // 5. Exibir resultado
    if (resultadoAnalise) {
      exibirResultado(resultadoAnalise.sentimento, resultadoAnalise.confianca);
    } else {
      exibirErro("Não foi possível obter um resultado da análise.");
    }

  } catch (error) {
    // Tratamento de erros centralizado para qualquer falha não capturada anteriormente
    exibirErro(error.message, error);
  }
}

