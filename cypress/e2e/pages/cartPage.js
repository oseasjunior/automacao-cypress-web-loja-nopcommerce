class CartPage {
    
    acessarCarrinho() {
        cy.get('.shopping_cart_link').click();
    }
    getProdutosNoCarrinho() {
        return cy.get('.cart_item');
    }

    continuarcomprando() {
        cy.get('#continue-shopping').click();
    }

    checkout() {
        cy.get('#checkout').click();
    }

    removerProdutoDoCarrinho(produtoNome) {
        cy.get('.cart_item').contains(produtoNome).parent().find('button').click();
    }

    validarCarrinhoVazio() {
        return cy.get('.cart_item').should('have.length', 0);
    }
}
export default new CartPage();

