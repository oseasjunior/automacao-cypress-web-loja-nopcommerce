/// <reference types="cypress" />

import LoginPage from "./pages/loginPage";
const loginPage = new LoginPage();


describe("testes pagina login", () => {
  beforeEach(() => {
    // Executa antes de cada teste
    cy.fixture("dados").as("dados");
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
      loginPage.acessarPaginaLogin();
      loginPage.login(dados.email, dados.senha);
      loginPage.submit();
      loginPage.getDashboard().should("be.visible");
    });
  });

 it("teste pagina login invalido", () => {
    cy.get("@dados").then((dados) => {
      loginPage.acessarPaginaLogin();
      loginPage.loginInvalido(dados.email_invalido, dados.senha_invalida);
      loginPage.submit();
      loginPage.mensagemErroLogin().should("contain.text", dados.mensagem_erro);
    });
  });

  it("teste pagina login com email vazio", () => {
    cy.get("@dados").then((dados) => {
      loginPage.acessarPaginaLogin();
      loginPage.loginInvalido( "{rightArrow}", dados.senha);
      loginPage.submit();
      loginPage
        .mensagemErroLogin()
        .should("contain.text", dados.mensagem_erro_email_vazio);
    });
  });

  it("teste pagina login com senha vazia", () => {
    cy.get("@dados").then((dados) => {
      loginPage.acessarPaginaLogin();
      loginPage.loginInvalido(dados.email, "{rightArrow}");
      loginPage.submit();
      loginPage
        .mensagemErroLogin()
        .should("contain.text", dados.mensagem_erro_senha_vazia);
     });
  });
    

  
});
