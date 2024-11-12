class CheckoutPage {

    //Elements
    buyPageItem(){
        return cy.get('.card:nth-child(1) > .card__link > div > .card__images > img')
    }

    buyItem(){
        return cy.get('.cfs-container > .size-selector > .size-list > .size-list__item:nth-child(2) > .size__link')
    }

    buyBtn(){
        return  cy.get('.action-buttons > .action-buttons-main > .action-buttons-main__cart > div > .buy-button')
    }

    verifyCartPage(){
        return  cy.get('.cart__summary > .cart__title')
    }

    verifyItemCart(){
        return cy.get('.name')
    }

    
    //Methods
    addItemToCart(itemName) {
       this.buyPageItem().click();
       this.buyItem().click();
       this.buyBtn().click();
       this.verifyCartPage().should('contain', 'Resumo da compra')
       this.verifyItemCart().should('contain', itemName)
    }


}

export default CheckoutPage;