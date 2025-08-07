# 🤖 VingaDevs CLI — Análise de Sentimentos com DeepSeek via OpenRouter

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![API](https://img.shields.io/badge/API-OpenRouter_DeepSeek-blue.svg)](https://openrouter.ai/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Team](https://img.shields.io/badge/Team-VingaDevs-purple.svg)](https://github.com/LilianMS/projeto_cli_desenvolve)

> **Projeto da equipe VingaDevs - Desenvolve Grupo Boticário** 🚀

Este é um **CLI (Command Line Interface)** desenvolvido pela equipe **VingaDevs** que analisa sentimentos em textos em português utilizando o modelo **DeepSeek** via API **OpenRouter**, que oferece acesso gratuito a modelos avançados de IA.

---

## ✨ Funcionalidades Principais

- 🎯 Classificação simples e rápida: Positivo, Neutro ou Negativo
- 💬 Resultado com emojis e cores para melhor visualização
- 🔄 Retry automático para lidar com falhas temporárias da API
- 🧹 Sanitização do texto para melhorar a qualidade da análise
- 🛡️ Validação e tratamento de erros na entrada e API
- ⚙️ Configuração flexível para trocar modelos IA conforme necessidade
- 📦 Código modular, organizado e fácil de manter

---

## 🧰 Tecnologias Utilizadas

- **Node.js** v18+  
- **OpenRouter API** (modelo DeepSeek Chat)  
- **Commander** para interface de linha de comando  
- **Chalk** para cores e emojis no terminal  
- **Dotenv** para variáveis de ambiente  
- **Node-fetch** para requisições HTTP  
- Arquitetura modularizada para facilidade de manutenção  

---

## 🚀 Passo a Passo: Instalação e Uso

### 1. Clone o Repositório e Entre na Branch

```bash
git clone https://github.com/LilianMS/projeto_cli_desenvolve.git
cd projeto_cli_desenvolve
git checkout leticia
```
### 2. Instale as Dependências

```bash
npm install
```
### 3. Crie sua conta no OpenRouter e obtenha a API Key

* Acesse o site oficial do OpenRouter: https://openrouter.ai/

* Clique em Sign Up e crie sua conta gratuita

* Após confirmar o email e fazer login, vá para o painel de usuário (Dashboard)

* Na aba API Keys, clique em Create New API Key

* Copie sua chave gerada (string alfanumérica)

### 4. Configure a chave no projeto

Na raiz do projeto, crie um arquivo .env com o seguinte conteúdo:

```bash
OPENROUTER_API_KEY="sua_chave_aqui"
```
### 5. Execute a análise de sentimento

Você pode analisar o sentimento de um texto direto pelo terminal, assim:

```bash
node src/index.js "Estou muito feliz com o resultado!"
```
Saída esperada:

```bash
😄 Positivo (Confiança: 92%)
```

---

### ⚙️ Como usar outro modelo IA

Este projeto foi desenvolvido para ser flexível e permitir o uso de outros modelos IA via OpenRouter (ex: GPT-4, Claude) ou outros provedores.

Para trocar o modelo:

1. Abra o arquivo src/config/constants.js

2. Modifique a linha do modelo, por exemplo: 

```js
export const CONFIG = {
  MODEL: "openrouter/deepseek-chat", // modelo padrão
  // MODEL: "openai/gpt-4", // outro modelo disponível
  MAX_RETRIES: 3,
};

```
3. Ajuste, se necessário, a estrutura das chamadas na camada de serviço (arquivo services/sentimentService.js), pois diferentes modelos podem ter requisições e respostas distintas.

Dica: Consulte a documentação do OpenRouter e do modelo escolhido para ajustar o payload da API.

---

### 🛠 Estrutura do Projeto

```bash
  src/
├── commands/          # Comandos CLI e parsing de argumentos
├── config/            # Constantes e configurações (chave, modelo, retries)
├── services/          # Integração com API OpenRouter
├── utils/             # Sanitização, validação e saída formatada
├── index.js           # Ponto de entrada do CLI

```

---

### 💡 Exemplos de Uso

| Comando                                      | Saída Esperada           |
|---------------------------------------------|--------------------------|
| `node src/index.js "Hoje foi um dia ótimo!"` | 😄 Positivo (92%)        |
| `node src/index.js "Não gostei do atendimento"` | 😠 Negativo (88%)     |
| `node src/index.js "Está tudo ok."`          | 😐 Neutro (75%)          |

---

### 🔧 Tratamento de Erros e Retry

* Validação do texto para garantir entrada válida

* Retry automático em até 3 tentativas para chamadas falhas na API

* Mensagens claras para erros de rede ou chave inválida

---

## 🤝 Equipe VingaDevs

- **Alicia** — UX e modo interativo  
- **Brenda** — Integração API e testes  
- **Davis** — Arquitetura e backend  
- **Leticia** — Documentação, requisitos e código (versão DeepSeek/OpenRouter)  
- **Lilian** — Organização e integração de APIs  

---

## 🚧 Melhorias Futuras

- 📁 Análise de arquivos de texto (`.txt`)  
- 🐛 Modo verboso para logs detalhados (`--verbose`)  
- 🧠 Cache local para reduzir chamadas repetidas  
- 🧪 Testes automatizados com Jest/Mocha  
- 📤 Exportação dos resultados para CSV/JSON  

---

## 📄 Licença

MIT License © 2024 - Equipe VingaDevs

---

## 🙏 Agradecimentos

- **Desenvolve Grupo Boticário** pelo programa de capacitação  
- **OpenRouter** pela API gratuita e confiável  
- **Comunidade Node.js** e mantenedores das bibliotecas utilizadas  

---

<div align="center">

Feito com ❤️ pela equipe **VingaDevs** do Desenvolve Grupo Boticário

[⬆️ Voltar ao topo](#)

</div>
```
