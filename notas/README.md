
<!-- 	
	Melhorias e Explicações Detalhadas
-->

# Bibliotecas Selecionadas

## NLP.js

NLP.js é uma biblioteca para Node.js voltada ao processamento de linguagem natural (NLP), ideal para chatbots e análise textual. Ela oferece recursos como extração de entidades, análise de sentimentos, detecção automática de idioma e suporte a mais de 40 idiomas.

**Vantagens:**
- Suporte multilíngue avançado (incluindo português).
- Alto desempenho e arquitetura transparente.
- Código aberto, com opções de privacidade.

> Fonte: [kommunicate.io - Bibliotecas NLP para Node.js e JavaScript](https://www-kommunicate-io.translate.goog/blog/nlp-libraries-node-javascript/?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=wa)

**Limitações:**  
A node-nlp não possui modelos pré-treinados para emoções específicas (como raiva, alegria ou tristeza), apenas para sentimentos básicos: positivo, negativo e neutro.

**Funcionalidades disponíveis:**
- Análise de sentimento geral.
- Tokenização e stemmer para vários idiomas.
- Ferramentas essenciais de NLP (entidades, classificação, etc.).

## Chalk

Chalk é uma biblioteca para Node.js que permite estilizar a saída do terminal com cores e estilos, tornando as mensagens mais legíveis e atraentes, sem alterar o prototype de String.

## Inquirer

A biblioteca Inquirer facilita a criação de interfaces interativas no terminal, com perguntas, menus e validações. É ideal para CLIs, tornando a aplicação mais amigável.

**Vantagens:**
- Interface clara e interativa.
- Suporte a perguntas encadeadas.
- Validações e listas dinâmicas.
- Organização do código.

# Inicialização do Projeto: Node.js, Git e Bibliotecas

```bash
npm init
```

- O projeto foi iniciado após clonar o repositório do GitHub. O comando `npm init` (sem o `-y`) permitiu revisar cada informação, garantindo que o `package.json` refletisse corretamente os dados do repositório remoto.
- O arquivo `.gitignore` foi criado para evitar o envio da pasta **node_modules** ao repositório.

**Instalação das bibliotecas:**

```bash
npm install node-nlp commander
npm install chalk
```

# Primeira versão do `index.js` explicada

```js
#!/usr/bin/env node

import { NlpManager } from 'node-nlp';
import { Command } from 'commander';
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
```

**Explicação:**
- O script implementa um CLI chamado `sentimento` para analisar frases em português.
- Utiliza a biblioteca NLP.js para identificar o sentimento da frase informada.
- O resultado é exibido no terminal com destaque visual usando Chalk.

O início do arquivo traz `#!/usr/bin/env node`, conhecido como *shebang*.  
Isso permite executar o script diretamente no terminal como um comando (`./index.js`), desde que o arquivo tenha permissão de execução.
O *shebang* não faz parte do JavaScript nem de nenhuma biblioteca; é uma instrução do sistema operacional (Unix/Linux/macOS).
Para conceder permissão de execução ao arquivo, utilize:  
```bash
chmod +x index.js
```

Para que o comando inicial do programa funcione, foi necessário acrescentar ao `package.json`:

```json
"bin": {
	"sentimento": "./index.js"
}
```
Para utilizar módulos ESM, adicione ao `package.json`:

```json
"type": "module"
```

### Sobre os imports

- `import { NlpManager } from 'node-nlp';`  
	Proveniente da biblioteca **node-nlp**.  
	`NlpManager` é a classe central responsável por:
	- Treinamento dos modelos.
	- Gerenciamento de intenções (*intents*).
	- Processamento de linguagem natural.
	- Análise de sentimento (embutida, mas com suporte completo apenas para inglês por padrão).  
	Ao instanciar `NlpManager`, defina o(s) idioma(s) desejado(s), como `'pt'` para português.

- `import { Command } from 'commander';`  
	Da biblioteca **commander**, utilizada para criar interfaces de linha de comando (CLI).  
	Permite definir comandos e argumentos, facilitando o uso do programa via terminal, por exemplo:  
	```bash
	node index.js "estou cansado"
	```

- `import chalk from 'chalk';`  
	Da biblioteca **chalk**, usada para estilizar e colorir textos exibidos no terminal.  
	Não possui relação direta com NLP, mas melhora a visualização dos resultados.

### Funcionamento do trecho principal do CLI usando Commander e NLP.js:

	```js
	const program = new Command();

	// Inicializa a interface de linha de comando (CLI) com Commander.
	program
		.name('sentimento')                           // Define o nome do comando.
		.description('Análise de sentimento...')      // Descrição exibida com --help.
		.argument('<frase>', 'Frase a ser analisada') // Argumento obrigatório: a frase.

	// Define a ação executada ao rodar o comando.
	.action((frase) => {
		// Inicializa o gerenciador de NLP para português.
		const manager = new NlpManager({ languages: ['pt'] });

		// Adiciona a frase como exemplo de intenção "sentimento.analisar".
		// ⚠️ Atenção: Aqui o modelo está sendo treinado apenas com a frase informada, o que limita a capacidade de generalização.
		manager.addDocument('pt', frase, 'sentimento.analisar');

		// Treina o modelo com os dados fornecidos.
		manager.train().then(() => {
			// Processa a frase para identificar intenção e sentimento.
			manager.process('pt', frase).then((result) => {
				// Exibe o resultado da análise de sentimento no terminal.
				console.log(chalk.green('Resultado da análise de sentimento:'));
				console.log(result.sentiment.vote); // Exibe "positive", "neutral" ou "negative".
			});
		});
	});

	
	program.parse();
	/* Esta linha executa o método `parse()` do objeto `program`, que é responsável por processar os argumentos da linha de comando conforme definidos anteriormente no código. Isso permite que o CLI interprete e execute os comandos e opções fornecidos pelo usuário. */
	```

**Resumo das principais variáveis do resultado:**
- `result.intent`: Intenção reconhecida pelo modelo.
- `result.score`: Grau de confiança na intenção detectada.
- `result.sentiment`: Objeto com detalhes da análise de sentimento, incluindo o voto final (`vote`).

Esse fluxo permite analisar rapidamente o sentimento de uma frase, mas para resultados mais precisos, recomenda-se treinar o modelo com um conjunto maior e mais variado de exemplos.

### Próximos passos

- [ ] criar arquivo com treinamento
- [ ] melhor saída de resultados
- [ ] melhorar interação via terminal com Inquirer