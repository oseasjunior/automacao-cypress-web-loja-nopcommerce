/// <reference types="cypress" />
import productsPage from "./pages/productsPage";
import '../support/commands';

describe('Funcionalidade Produtos', () => {

    beforeEach(() => {
        // Executa antes de cada teste
        cy.fixture('products').as('products');
        cy.login();

    })
    afterEach(() => {
        // Executa após cada teste
        // limpar cookies, localStorage, etc.
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('Deve classificar os produtos de A a Z', () => {
        productsPage.filtroclassificarpornomeAaz();
        productsPage.validaOrdemAaz();
    });

    it('Deve classificar os produtos de Z a A', () => {
        productsPage.filtroclassificaNameZaa();
        productsPage.validaOrdemZaa();
    });

    it('Deve classificar os produtos por preço crescente', () => {
        productsPage.filtroClassificaPrecoCrescente();
        productsPage.validaOrdemPrecoCrescente();
    }); 

    it('Deve classificar os produtos por preço decrescente', () => {
        productsPage.filtroClassificaçãoPrecoDecrescente();
        productsPage.validaOrdemPrecoDecrescente();
    });

    it('Deve adicionar um produto ao carrinho', () => {
        cy.get('@products').then((products) => {
            productsPage.adicionarProdutoAoCarrinho(products.nomeDoProduto);
            productsPage.validaProdutoNoCarrinho(products.quantidadeDeProdutos);
        });
    });

    it('Deve remover um produto do carrinho', () => {
        cy.get('@products').then((products) => {
            productsPage.adicionarProdutoAoCarrinho(products.nomeDoProduto);
            productsPage.removerProdutoDoCarrinho(products.nomeDoProduto);
            productsPage.validaCarrinhoVazio();
        });
    });
})