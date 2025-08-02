### Dicas e lembretes

#### Usar .gitignore
Quando não quer enviar o arquivo ou diretório para o repositório
Ex:

``` bash
node_modules/

``` 

#### Funções Async

📋 Checklist para ajudar

- A função...
- [ ] usa await? → async
- [ ] chama APIs externas? → async
- [ ] lê/escreve arquivos? → async
- [ ] apenas manipula dados na memória? → síncrona
- [ ] apenas exibe coisas no console? → síncrona

> A regra de ouro é: se tem await, precisa de async! 🎯