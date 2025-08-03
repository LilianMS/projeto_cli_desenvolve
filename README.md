# 🤖 Sentimento CLI — Análise de Sentimento com IA

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![API](https://img.shields.io/badge/API-Hugging%20Face-orange.svg)](https://huggingface.co/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Team](https://img.shields.io/badge/Team-VingaDevs-purple.svg)](https://github.com/LilianMS/projeto_cli_desenvolve)

> **Projeto da equipe VingaDevs - Desenvolve Grupo Boticário** 🚀

Este é um **CLI (Command Line Interface)** avançado em **Node.js** desenvolvido pela equipe **VingaDevs** que analisa o sentimento de textos utilizando **Inteligência Artificial** através da **Hugging Face Inference API** com modelo **BERT multilíngue**.

## ✨ Funcionalidades

- 🎯 **Análise precisa** com 5 níveis de sentimento (Muito Negativo → Muito Positivo)
- 💬 **Modo interativo intuitivo** - conversação contínua e amigável
- 🎨 **Interface rica** - cores, emojis e formatação elegante
- 🌍 **Multilíngue** - funciona em português, inglês e outros idiomas
- 🔒 **Seguro** - variáveis de ambiente para API keys
- 📚 **Bem documentado** - código organizado pela equipe VingaDevs

## 🧠 Tecnologia

- **Modelo IA:** `nlptown/bert-base-multilingual-uncased-sentiment`
- **API:** Hugging Face Inference API
- **Precisão:** Alta (modelo BERT treinado em milhões de textos)
- **Idiomas:** Português, Inglês, Espanhol, Francês, Alemão, e mais

---

## 🚀 Instalação e Uso

### 1. Clone o Repositório
```bash
git clone https://github.com/LilianMS/projeto_cli_desenvolve.git
cd projeto_cli_desenvolve
```

### 2. Instale as Dependências
```bash
npm install
```

### 3. Configure a API Key
Crie um arquivo `.env` na raiz do projeto:
```bash
# .env
HUGGINGFACE_API_KEY=seu_token_aqui
```

**📝 Como obter o token:**
1. Acesse: https://huggingface.co/settings/tokens
2. Crie uma conta gratuita
3. Gere um **Read Token**
4. Cole no arquivo `.env`

### 4. Execute o Projeto

O **VingaDevs CLI** funciona exclusivamente em modo interativo, proporcionando uma experiência conversacional intuitiva:

```bash
# Inicie o VingaDevs CLI
npm start

# Ou diretamente
node vingadevs-cli.js

# Ou usando o comando especial VingaDevs
npm run vingadevs
```

---

## 💡 Exemplo de Uso - VingaDevs Experience

```bash
$ npm start

🤖 VingaDevs - Análise de Sentimento com IA
Bem-vindo ao nosso analisador inteligente! 
Digite "sair" para encerrar

💬 Digite o texto para análise: Adorei trabalhar com a equipe VingaDevs!
🔄 Analisando sentimento com IA... 🧠

==================================================
📝 Texto analisado: "Adorei trabalhar com a equipe VingaDevs!"
🎯 Resultado da Análise: Muito Positivo
😊 Emoji: 🤩
==================================================

💬 Digite o texto para análise: Este projeto ficou incrível
🔄 Analisando sentimento com IA... 🧠

==================================================
📝 Texto analisado: "Este projeto ficou incrível"
🎯 Resultado da Análise: Muito Positivo
😊 Emoji: 🤩
==================================================

💬 Digite o texto para análise: sair
👋 Obrigado por usar o VingaDevs CLI! Até logo!

```

---

## 📊 Níveis de Sentimento

| Nível | Emoji | Descrição |
|-------|-------|-----------|
| **Muito Positivo** | 🤩 | Extremamente positivo, entusiasmado |
| **Positivo** | 😄 | Positivo, satisfeito |
| **Neutro** | 😐 | Neutro, sem sentimento claro |
| **Negativo** | 😠 | Negativo, insatisfeito |
| **Muito Negativo** | 😡 | Extremamente negativo, revoltado |

---


## 📁 Estrutura do Projeto VingaDevs

```
projeto_cli_desenvolve/
├── 📄 vingadevs-cli.js          # Aplicação principal VingaDevs (v2.0)
├── 📄 sentimento-hibrido.js     # Versão híbrida anterior  
├── 📁 src/
│   └── sentimento-cli.js        # Versão original
├── 📄 package.json              # Dependências e scripts VingaDevs
├── 📄 .env                      # Variáveis de ambiente (não versionar)
├── 📄 .gitignore               # Arquivos ignorados pelo Git
└── 📄 README.md                # Este arquivo
```

---

## 🎯 Evolução do Projeto VingaDevs

### Versão 1.0 (Protótipo Inicial)
- ✅ Análise básica com node-nlp
- ✅ Interface simples
- ❌ Baixa precisão
- ❌ Vulnerabilidades de segurança

### Versão 2.0 (VingaDevs Release) - **Atual** 🚀
- ✅ IA avançada (BERT multilíngue)
- ✅ Interface interativa rica e intuitiva
- ✅ Experiência focada no usuário
- ✅ Código bem organizado pela equipe
- ✅ Sem vulnerabilidades
- ✅ Alta precisão e confiabilidade

**Decisão VingaDevs:** Focamos no modo interativo por proporcionar a melhor experiência ao usuário! 🎯

---

## 🤝 Equipe VingaDevs

- **Alicia** - Implementação do modo interativo com ReadLine e UX  
- **Brenda** - Integração com API Hugging Face e testes
- **Davis** - Desenvolvimento e arquitetura do projeto
- **Leticia** - Análise de requisitos e documentação  
- **Lilian** - Desenvolvimento e organização do código, integração de APIs

> 💜 **VingaDevs** - Unidos pela paixão por tecnologia e inovação!


---

## 🔍 Tecnologias Utilizadas

- **Node.js** 18+
- **ES Modules** (import/export)
- **Hugging Face API** (Inference API)
- **Readline** (Interface interativa nativa)
- **Chalk** (Cores no terminal)
- **Dotenv** (Variáveis de ambiente)
- **BERT** (Modelo de IA multilíngue)

---

## 🚨 Troubleshooting

### Erro: "Invalid credentials"
```bash
# Verifique se o token está correto no .env
cat .env

# Regenere o token em: https://huggingface.co/settings/tokens
```

### Erro: "Command not found"
```bash
# Certifique-se que o Node.js está instalado
node --version

# Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

### Erro: "API rate limit"
```bash
# Aguarde alguns minutos e tente novamente
# Ou crie uma conta Pro no Hugging Face para mais requests
```

---

## 📈 Próximas Funcionalidades VingaDevs

- [ ] 🎨 Temas personalizáveis de cores
- [ ] 📊 Histórico de análises da sessão
- [ ] 📁 Análise de arquivos de texto
- [ ] 🤖 Diferentes personalidades de IA
- [ ] 📱 Suporte a múltiplos textos simultâneos
- [ ] 🎛️ Configuração de diferentes modelos IA
- [ ] 📋 Exportação de resultados (JSON/CSV)
- [ ] 🌟 Sistema de favoritos para frases analisadas

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙏 Agradecimentos

- **Desenvolve Grupo Boticário** pelo programa de capacitação
- **Hugging Face** pela API gratuita de IA
- **Comunidade Node.js** pelas excelentes bibliotecas

---

<div align="center">

**Feito com ❤️ pela equipe VingaDevs do Desenvolve Grupo Boticário**

[⬆️ Voltar ao topo](#-sentimento-cli--análise-de-sentimento-com-ia)

</div>