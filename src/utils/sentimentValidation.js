/**
 * Utilitários para validação de entrada
 */

/**
 * Valida se o texto fornecido é válido para análise
 * @param {string} texto - Texto a ser validado
 * @returns {Object} - { valido: boolean, erro: string|null }
 */
export function validarTexto(texto) {
  // Verifica se o texto existe
  if (!texto) {
    return {
      valido: false,
      erro: 'Texto não fornecido'
    };
  }

  // Verifica se é uma string
  if (typeof texto !== 'string') {
    return {
      valido: false,
      erro: 'Texto deve ser uma string'
    };
  }

  // Remove espaços em branco e verifica se não está vazio
  const textoLimpo = texto.trim();
  if (textoLimpo.length === 0) {
    return {
      valido: false,
      erro: 'Texto não pode estar vazio'
    };
  }

  // Verifica comprimento mínimo
  if (textoLimpo.length < 2) {
    return {
      valido: false,
      erro: 'Texto muito curto (mínimo 2 caracteres)'
    };
  }

  // Verifica comprimento máximo (para evitar textos excessivamente longos)
  if (textoLimpo.length > 1000) {
    return {
      valido: false,
      erro: 'Texto muito longo (máximo 1000 caracteres)'
    };
  }

  // Verifica se contém apenas espaços ou caracteres especiais
  const textoSemEspacos = textoLimpo.replace(/\s+/g, '');
  if (textoSemEspacos.length === 0) {
    return {
      valido: false,
      erro: 'Texto deve conter pelo menos uma palavra'
    };
  }

  return {
    valido: true,
    erro: null
  };
}

/**
 * Sanitiza o texto removendo caracteres desnecessários, espaços múltiplos / limpa o texto
 * @param {string} texto - Texto a ser sanitizado
 * @returns {string} - Texto sanitizado
 */
export function sanitizarTexto(texto) {
  if (!texto || typeof texto !== 'string') {
    return '';
  }

  return texto
    .trim()
    .replace(/\s+/g, ' ') // Remove espaços múltiplos
    .replace(/[^\w\s\u00C0-\u017F.,!?;:\'"()-]/g, ''); // Remove caracteres especiais, mantendo acentos e pontuação básica
}