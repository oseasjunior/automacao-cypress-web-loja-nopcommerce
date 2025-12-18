import loginPage from "../e2e/pages/loginPage";
import productsPage from "../e2e/pages/productsPage";

Cypress.Commands.add('login', () => {
loginPage.acessarPaginaLogin();
loginPage.login('standard_user', 'secret_sauce');
loginPage.submit();

});

Cypress.Commands.add('adicionarProdutosAoCarrinho', (produtos) => {
   productsPage.adicionarProdutoAoCarrinho(produtos);
});


