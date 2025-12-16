/// <reference types="cypress" />

import LoginPage from "./pages/loginPage";

describe("testes pagina login", () => {
  beforeEach(() => {
    // Executa antes de cada teste
    cy.fixture("dados").as("dados");
    const loginPage = new LoginPage();
    loginPage.acessarPaginaLogin();
  });

  afterEach(() => {
    // Executa após cada teste
    // limpar cookies, localStorage, etc.
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("teste pagina login valido", () => {
    cy.get("@dados").then((dados) => {
      const loginPage = new LoginPage();
      loginPage.acessarPaginaLogin();
      loginPage.login(dados.email, dados.senha);
      loginPage.submit();
      loginPage.getDashboard().should("be.visible");
    });
  });

 it("teste pagina login invalido", () => {
    cy.get("@dados").then((dados) => {
      const loginPage = new LoginPage();
      loginPage.acessarPaginaLogin();
      loginPage.loginInvalido(dados.email_invalido, dados.senha_invalida);
      loginPage.submit();
      loginPage.mensagemErroLogin().should("contain.text", dados.mensagem_erro);
    });
  });

  
});
