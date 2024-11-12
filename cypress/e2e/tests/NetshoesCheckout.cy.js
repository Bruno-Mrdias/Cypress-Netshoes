import CheckoutPage from "../pages/CheckoutPage"
import HomePage from "../pages/HomePage"

const checkoutPage = new CheckoutPage()
const homePage = new HomePage()


describe('Netshoes Checkout', () => {
    beforeEach(() => {
      Cypress.config('scrollBehavior', "center");
      cy.visit('https://www.netshoes.com.br')

    })

    it('netshoes verify checkout @checkout', () => {

      homePage.categoryValText('Masculino','SELEÇÃO DE PRODUTOS PRA ELES!')

      checkoutPage.addItemToCart('Bermuda Adidas 3S Masculina');
      
     
     })

})  


