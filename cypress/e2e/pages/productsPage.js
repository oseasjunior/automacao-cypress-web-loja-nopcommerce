class ProductsPage {

    filtroclassificarpornomeAaz() {
        cy.get('.product_sort_container').select('Name (A to Z)')
    }

    validaOrdemAaz() {
        cy.get('.inventory_item_name').then(($el) => {
            const names = $el.toArray().map(item => item.innerText)
            const sortedNames = [...names].sort()
            expect(names).to.deep.equal(sortedNames)
        })
    }
    filtroclassificaNameZaa() {
        cy.get('.product_sort_container').select('Name (Z to A)')
    }

    validaOrdemZaa() {
        cy.get('.inventory_item_name').then(($el) => {
            const names = $el.toArray().map(item => item.innerText)
            const sortedNames = [...names].sort().reverse()
            expect(names).to.deep.equal(sortedNames)
        })
    }

    filtroClassificaPrecoCrescente() {
        cy.get('.product_sort_container').select('Price (low to high)')
    }

    validaOrdemPrecoCrescente() {
        cy.get('.inventory_item_price').then(($el) => {
            const prices = $el.toArray().map(item => parseFloat(item.innerText.replace('$', '')))
            const sortedPrices = [...prices].sort((a, b) => a - b)
            expect(prices).to.deep.equal(sortedPrices)
        })
    }

    filtroClassificaçãoPrecoDecrescente() {
        cy.get('.product_sort_container').select('Price (high to low)')
    }

    validaOrdemPrecoDecrescente() {
        cy.get('.inventory_item_price').then(($el) => {
            const prices = $el.toArray().map(item => parseFloat(item.innerText.replace('$', '')))
            const sortedPrices = [...prices].sort((a, b) => b - a)
            expect(prices).to.deep.equal(sortedPrices)
        })
    }

    adicionarProdutoAoCarrinho(nomeDoProduto) {
        cy.contains('.inventory_item', nomeDoProduto)
            .find('button')
            .click()
    }
    validaProdutoNoCarrinho(numeroDeItens) {
        cy.get('.shopping_cart_badge').should('have.text', numeroDeItens)
    }

    removerProdutoDoCarrinho(nomeDoProduto) {
        cy.contains('.inventory_item', nomeDoProduto)
            .find('button')
            .click()
    }
    validaCarrinhoVazio() {
        cy.get('.shopping_cart_badge').should('not.exist')
    }

}

export default new ProductsPage();
