/// <reference types="cypress" />
import cartPage from "./pages/cartPage";
import '../support/commands';

describe('Funcionalidade Carrinho de Compras', () => {

    beforeEach(() => {
        // Executa antes de cada teste
        cy.fixture('products').as('products');
        cy.login();
        cy.get('@products').then((products) => {
            cy.adicionarProdutosAoCarrinho(products.nomeDoProduto);
        });
        cartPage.acessarCarrinho();
    })
    afterEach(() => {
        // Executa após cada teste
        // limpar cookies, localStorage, etc.
        cy.clearCookies();
        cy.clearLocalStorage();
    });
    it('Deve validar os produtos no carrinho', () => {
        cy.get('@products').then((products) => {
            cartPage.getProdutosNoCarrinho().should('have.length', 1);
        });
    });

    it('Deve continuar comprando a partir do carrinho', () => {
        cartPage.continuarcomprando();
        cy.url().should('include', '/inventory.html');
    });

    it('Deve proceder para o checkout a partir do carrinho', () => {
        cartPage.checkout();
        cy.url().should('include', '/checkout-step-one.html');
    });

    it('Deve remover um produto do carrinho', () => {
        cy.get('@products').then((products) => {
            const produtoARemover = products.nomeDoProduto[0];
            cartPage.removerProdutoDoCarrinho(produtoARemover);
            cartPage.getProdutosNoCarrinho().should('have.length', 0);
        });
    });

        
})