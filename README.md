# automacao-cypress-web-loja-saucedemo ✅
Automação de testes E2E para a loja de demonstração *saucedemo* usando Cypress.

---

## 🔧 Estrutura do projeto

- `cypress/e2e/login.cy.js` — testes de login.
- `cypress/e2e/burguerMenu.cy.js` — testes do menu hamburguer.
- `cypress/e2e/products.cy.js` — testes da pagina produtos.
- `cypress/e2e/cart.cy.js` — testes da pagina do carrinho.
- `cypress/e2e/pages/loginPage.js` — Page Object Model para a página de login.
- `cypress/e2e/pages/burguerMenuPage.js` — Page Object Model para o menu Hamburguer.
- `cypress/e2e/pages/productsPage.js` — Page Object Model para a página de produtos.
- `cypress/e2e/pages/productsPage.js` — Page Object Model para a pagina do carrinho.
- `cypress/fixtures/login.json` — dados de teste para a pagina de login (e-mails, senhas, mensagens).
- `cypress/fixtures/products.json` — dados de teste para a pagina de produtos (nomes dos produtos, quantidades, mensagens).
- `cypress/screenshots/` — screenshots gerados pelos testes.

---

## ⚙️ Pré-requisitos

- Node.js (recomendado: versão LTS)
- npm (vem com Node.js)
- Cypress (já listado em `devDependencies` do `package.json`, versão compatível: `^15.7.1`).

---

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone <repo-url>
cd automacao-cypress-web-loja-saucedemo
```

2. Instale as dependências:

```bash
npm install
```

---

## ▶️ Como executar os testes

- Abrir a interface do Cypress (modo interativo):

```bash
npx cypress open
```

- Executar todos os testes em modo headless (padrão):

```bash
npx cypress run
```

- Executar em um navegador específico (via scripts do `package.json`):

```bash
npm run cy:run:chrome   # executa com Chrome
npm run cy:run:edge     # executa com Edge
```

- Executar um arquivo de teste específico:

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

- Executar em modo headless mas com janela visível (headed):

```bash
npx cypress run --headed --browser chrome
```

---

## 🧪 Detalhes dos testes

- `beforeEach`: carrega o fixture `dados.json` e navega até a página de login.
- `afterEach`: limpa cookies e `localStorage` para garantir testes isolados.
- Os testes usam o padrão Page Object (pasta `pages`) para manter seletores e ações centralizados.

---

## 💡 Dicas e observações

> - Verifique `cypress/fixtures` para modificar dados de teste.
> - Capturas de tela são salvas em `cypress/screenshots/` por execução com falha.
> - Caso precise gerar relatórios (mochawesome), configure scripts adicionais conforme necessário.

---

**Autor:** Oseas Junior

**Nota:** arquivo atualizado para facilitar execução e manutenção dos testes. 🔧
