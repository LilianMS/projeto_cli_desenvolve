# projeto_cli_desenvolve
Projeto em equipe do Desenvolve do Grupo Boticário

# Analisador de Sentimentos CLI

## 🎯 Objetivo do Projeto

Este é um simples programa de linha de comando (CLI) construído em Node.js que utiliza um modelo de linguagem avançado (Meta Llama 3) para realizar análise de sentimento. O objetivo é identificar se uma frase fornecida pelo usuário possui um tom positivo ou negativo.

## ✨ Funcionalidades

  - Recebe uma frase em português como entrada.
  - Conecta-se à API da OpenRouter para acessar modelos de linguagem de grande escala.
  - Retorna uma classificação de sentimento clara:
      - `Sua frase possui um sentimento positivo :)`
      - `Sua frase possui um sentimento negativo :(`
      - `Infelizmente, não consegui identificar o sentimento da sua frase, tente novamente com outra frase`

## 🚀 Tecnologias Utilizadas

  - [Node.js](https://nodejs.org/en/)
  - [OpenAI Node.js Library](https://github.com/openai/openai-node) (para interagir com a API compatível)
  - [dotenv](https://www.npmjs.com/package/dotenv) (para gerenciar variáveis de ambiente)
  - [OpenRouter.ai](https://openrouter.ai/) (como provedor da API do modelo Llama 3)

## 🔧 Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado em sua máquina:

  - [Node.js](https://nodejs.org/en/) (versão 18 ou superior recomendada)
  - `npm` ou outro gerenciador de pacotes (geralmente vem com o Node.js)
  - Uma chave de API da [OpenRouter.ai](https://openrouter.ai/) (o cadastro é gratuito).

## ⚙️ Instalação e Configuração

Siga os passos abaixo para configurar o projeto em seu ambiente local.

1.  **Clone o repositório (ou copie os arquivos):**
    Se seu projeto estivesse no GitHub, você usaria o `git clone`. Como está na sua máquina, apenas certifique-se de que os arquivos estão em uma pasta dedicada.

2.  **Navegue até a pasta do projeto:**

    ```bash
    cd caminho/para/seu/projeto
    ```

3.  **Instale as dependências:**
    Execute o comando abaixo para instalar as bibliotecas `openai` e `dotenv`.

    ```bash
    npm install
    ```

4.  **Configure suas variáveis de ambiente:**
    Crie um arquivo chamado `.env` na raiz do seu projeto. Este arquivo guardará sua chave de API de forma segura.

    ```bash
    touch .env
    ```

    Dentro do arquivo `.env`, adicione a seguinte linha, substituindo `SUA_CHAVE_API_AQUI` pela sua chave real da OpenRouter:

    ```
    LLAMA_API_KEY=SUA_CHAVE_API_AQUI
    ```

## ▶️ Como Utilizar

Para analisar uma frase, siga estes passos:

1.  **Abra o arquivo `cli.js` em um editor de código.**

2.  **Encontre a última linha do arquivo:**

    ```javascript
    main("Hoje o dia está lindo")
    ```

3.  **Altere a frase:**
    Modifique o texto dentro dos parênteses da função `main()` para a frase que você deseja analisar. Por exemplo:

    ```javascript
    main("Eu detestei aquele filme, foi uma perda de tempo.")
    ```

4.  **Execute o programa:**
    Salve o arquivo e, no seu terminal, execute o seguinte comando:

    ```bash
    node cli.js
    ```

5.  **Veja o resultado:**
    O resultado da análise será impresso diretamente no seu terminal.

-----
