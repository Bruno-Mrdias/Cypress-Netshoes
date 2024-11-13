import CepPage from "../pages/CepPage"
import HomePage from "../pages/HomePage";
const cepPage = new CepPage();
const homePage = new HomePage();

describe('Netshoes Cep', () => {

    beforeEach(() => {
      
        cy.visit('https://www.netshoes.com.br')
  
    })

    it(['cep'],'verify netshoes adding Cep', () => {
     
        homePage.cepAddBtn().click();

        cepPage.AddCep('37460-000');

     })

})  

