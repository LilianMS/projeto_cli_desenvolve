# 🤖 VingaDevs CLI — Análise de Sentimento com IA

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
# Inicie o VingaDevs CLI (Versão Modular v3.0)
npm start

# Ou diretamente
node vingadevs-modular.js

# Comando especial VingaDevs
npm run vingadevs

# Versão anterior (se necessário)
npm run legacy
```

> 💡 **VingaDevs v3.0:** Arquitetura modular para máxima organização e manutenibilidade!

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


## 📁 Estrutura do Projeto VingaDevs v3.0

```
projeto_cli_desenvolve/
├── 📄 vingadevs-modular.js         # 🆕 Aplicação principal modular (v3.0)
├── 📁 src/                         # 🆕 Código fonte modularizado
│   ├── 📁 config/
│   │   └── constants.js            # Configurações e constantes
│   ├── 📁 services/
│   │   └── sentiment.js            # Lógica de análise de sentimento
│   ├── 📁 utils/
│   │   └── display.js              # Funções de interface e UX
│   └── 📁 cli/
│       └── interactive.js          # Modo interativo
├── 📁 docs/                        # Versão original e documentação
│   └── 📁 versions/
│       ├── cli_initial.js          # Código da versão 1.0
│       ├── cli_wth_emoji.js        # Código da versão 1.1
│       ├── sentimento_cli.js       # Código da versão 2.0
│       ├── sentimento_hibrido.js   # Código da versão 2.1
│       ├── vingadevs-cli.js        # Código da versão 2.2
├── 📄 package.json                 # Dependências e scripts VingaDevs
├── 📄 .env                         # Variáveis de ambiente (não versionar)
├── 📄 .gitignore                   # Arquivos ignorados pelo Git
└── 📄 README.md                    # Este arquivo
```

---

## 🎯 Evolução do Projeto VingaDevs

### Versão 1.0 (Protótipo Inicial)
- ✅ Análise básica com node-nlp
- ✅ Interface simples
- ❌ Baixa precisão
- ❌ Vulnerabilidades de segurança

### Versão 2.0 (VingaDevs Release)
- ✅ IA avançada (BERT multilíngue)
- ✅ Interface interativa rica e intuitiva
- ✅ Experiência focada no usuário
- ✅ Código bem organizado pela equipe
- ✅ Sem vulnerabilidades
- ✅ Alta precisão e confiabilidade

### Versão 3.0 (Arquitetura Modular) - **Atual** 🚀
- ✅ **Código modularizado** em módulos especializados
- ✅ **Separação de responsabilidades** clara
- ✅ **Manutenibilidade máxima** e escalabilidade
- ✅ **Testabilidade individual** de cada módulo
- ✅ **Organização profissional** de nível enterprise
- ✅ **Documentação completa** em cada módulo

**Decisão VingaDevs v3.0:** Arquitetura modular para facilitar manutenção, testes e evolução futura! 🎯

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

## 📈 Melhorias após o Escopo Inicial

- [x] **Cores no terminal:** Saídas coloridas para facilitar a leitura e destacar resultados.
- [x] **Emojis nas respostas:** Emojis integrados para tornar a experiência mais visual e intuitiva.
- [x] **Interatividade aprimorada:** Fluxo conversacional contínuo, comandos intuitivos e feedback instantâneo.

---

## 📈 Próximas Funcionalidades VingaDevs (🦸 O céu é o limite!)

- [ ] 📊 Histórico de análises da sessão
- [ ] 📁 Análise de arquivos de texto
- [ ] 📋 Exportação de resultados (JSON/CSV)
- [ ] 🌟 Sistema de favoritos para frases analisadas
- [ ] 🔍 Filtros avançados de sentimento
- [ ] 🎨 Temas personalizáveis de cores
- [ ] 🤖 Diferentes personalidades de IA
- [ ] 🧩 Integração com outras APIs de IA
- [ ] 🎛️ Configuração de diferentes modelos IA
- [ ] 📱 Suporte a múltiplos textos simultâneos
- [ ] 🧪 Testes automatizados integrados
- [ ] 📦 Distribuição como pacote global npm
- [ ] 🛠️ Interface gráfica opcional (GUI)

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