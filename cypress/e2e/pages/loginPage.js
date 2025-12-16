class loginPage {
  acessarPaginaLogin() {
    cy.visit("https://www.saucedemo.com/");
  }
  login(email, senha) {
    cy.get("#user-name").clear().type(email);
    cy.get("#password").clear().type(senha);
  }
  submit() {
    cy.get("#login-button").click();
  }
  getDashboard() {
    return cy.get("[class='app_logo']");
  }

  loginInvalido(email, senha) {
    cy.get("#user-name").clear().type(email);
    cy.get("#password").clear().type(senha);
  }

  mensagemErroLogin() {
    return cy.get("[data-test='error']");
  }

  mensagemEmailCurto() {
    return cy.get("[data-test='error']");
  }

  loginVazio(senha) {
    cy.get("#Email").clear();
    cy.get("#Password").clear().type(senha);
  }
}

export default loginPage;
