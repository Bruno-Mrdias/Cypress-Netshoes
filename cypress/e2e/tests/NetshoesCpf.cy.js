import CpfPage from "../pages/CpfPage"
import HomePage from "../pages/HomePage";
const cpfPage = new CpfPage();
const homePage = new HomePage();

describe('Netshoes Cpf', () => {

    beforeEach(() => {
      
        cy.visit('https://www.netshoes.com.br')
  
    })

    it(['cpf'],'verify netshoes adding Cpf', () => {
     
        homePage.cepAddBtn().click();

        cpfPage.AddCpf('37460-000');

     })

})  

