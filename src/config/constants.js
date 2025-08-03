//Mensagens em PT-BR (centralizadas para fácil manutenção)
export const MESSAGES = {
    API_ERROR: "Erro na API",
    INVALID_TEXT: "Texto inválido",
    TIMEOUT: "Tempo de resposta excedido",
    AUTH_ERROR: " Chave da API inválida",
    ANALYZING: 'Analisando sentimento... Aguarde 🧠',
    RESULT_PREFIX: 'Resultado da análise:',

};

// Configurações Padrão
export const CONFIG={
    MODEL: "deepseek/deepseek-chat-v3-0324:free", // Corrigido para o ID correto do modelo
    MAX_RETRIES: 2,
    TIMEOUT_MS: 30000, // 30 segundos
};

export const SENTIMENT_EMOJIS = {
  positive: '😄',
  negative: '😠',
  neutral: '😐',
  unknown: '🤔'
};

export const SENTIMENT_LABELS = {
  positive: 'Positivo',
  negative: 'Negativo',
  neutral: 'Neutro',
  unknown: 'Indeterminado'
};
