class CepPage {

    //Elements
    cepModal(){
        return cy.get('#cepModal')
    }
    
    cepModalBtn(){
       return cy.get('.modal__button > span')
    }

    cepZipCode(){
        return cy.get('.zipcode__cep')
    }  
    
    
    //Methods
    AddCep(cepNum){
        this.cepModal().type(cepNum)
        this.cepModalBtn().click()
        this.cepZipCode().should('contain', cepNum)
    }

}

export default CepPage;