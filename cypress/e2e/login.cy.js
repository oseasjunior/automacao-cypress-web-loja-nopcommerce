/// <reference types="cypress" />

import loginPage from "./pages/loginPage";


describe("Funcionalidade login", () => {
  beforeEach(() => {
    // Executa antes de cada teste
    cy.fixture("login").as("login");
    loginPage.acessarPaginaLogin();
  });

  afterEach(() => {
    // Executa após cada teste
    // limpar cookies, localStorage, etc.
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("Deve realizar login valido", () => {
    cy.get("@login").then((login) => {
      loginPage.acessarPaginaLogin();
      loginPage.login(login.email, login.senha);
      loginPage.submit();
      loginPage.getDashboard().should("be.visible");
    });
  });

 it("Deve exibir mensagem de erro login invalido", () => {
    cy.get("@login").then((login) => {
      loginPage.acessarPaginaLogin();
      loginPage.loginInvalido(login.email_invalido, login.senha_invalida);
      loginPage.submit();
      loginPage.mensagemErroLogin().should("contain.text", login.mensagem_erro);
    });
  });

  it("Deve exibir mensagem de erro login com email vazio", () => {
    cy.get("@login").then((login) => {
      loginPage.acessarPaginaLogin();
      loginPage.loginInvalido( "{rightArrow}", login.senha);
      loginPage.submit();
      loginPage
        .mensagemErroLogin()
        .should("contain.text", login.mensagem_erro_email_vazio);
    });
  });

  it("Deve exibir mensagem de erro login com senha vazia", () => {
    cy.get("@login").then((login) => {
      loginPage.acessarPaginaLogin();
      loginPage.loginInvalido(login.email, "{rightArrow}");
      loginPage.submit();
      loginPage
        .mensagemErroLogin()
        .should("contain.text", login.mensagem_erro_senha_vazia);
     });
  });
    

  
});
