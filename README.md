# automacao-cypress-web-loja-Swag Labs
Este projeto contém testes automatizados para a página da loja fictícia Swag Labs

## Estrutura

- **login.cy.js**: Arquivo principal dos testes.
- **pages/loginPage.js**: Page Object Model para interações com a página de login.
- **fixtures/dados.json**: Dados de teste (e-mails, senhas, mensagens de erro).

## Pré-requisitos

- Node.js instalado
- Cypress instalado  v15.7.1 (`npm install cypress`)

## Como executar os testes

1. Clone o repositório.
2. Instale as dependências:
  ```
  npm install
  ```
3. Execute o Cypress:
  ```
  npx cypress open
  ```
  ou em modo headless:
  ```
  npx cypress run
  ```
ou se for executar em headless com algum navegador expecifico 
Chrome
```
npm run cy:run:chrome
```
Edge
```
npm run cy:run:edge
```

## Estrutura dos testes

- **beforeEach**: Carrega os dados do fixture e acessa a página de login.
- **afterEach**: Limpa cookies e localStorage.
- **Testes**:
  - Login válido
  - Login inválido

## Observações

- Certifique-se de que o arquivo `dados.json` está corretamente configurado em `cypress/fixtures`.
- O arquivo `loginPage.js` deve implementar os métodos utilizados nos testes.
