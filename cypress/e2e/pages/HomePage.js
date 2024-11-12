class HomePage {

    //Elements
    cepAddBtn(){
        return  cy.get('.navbar__cep')
    }
    
    allCategoriesBtn(){
        return cy.get('.navbar > .navbar__content > .navbar__all-categories > .navbar__button > .navbar__button__title')
    }
    

    optionSelect(){
        return cy.get('.categories__name')
    }
    
    mainPageVerify(){
        return cy.get('.header-content__title')
    }

    categoryOption(category){
       return cy.get('.categories__name').contains(category) // Find the span containing "Masculino"
                .closest('li.categories__item') // Traverse up to the closest li with class "categories_item"
                .click(); // Click on it
    }

    mainBarCategories(category){
        return cy.get('.main-nav__link').contains(category)
    }

    
    
    
    
    
    
    
    //Methods
    allCategoryVal(){
        this.optionSelect().should('contain', 'Masculino')
        .should('contain', 'Feminino')
        .should('contain', 'Infantil')
        .should('contain', 'Calçados')
        .should('contain', 'Roupas')
        .should('contain', 'Suplementos')
        .should('contain', 'GAMES')
        .should('contain', 'Equipamentos')
        .should('contain', 'Promoções')
        .should('contain', 'Categorias')
    }

    categoryValText(category, headText){
        this.allCategoriesBtn().click()
        this.categoryOption(category)
        this.mainPageVerify().should('contain', headText)
    }

    categoryValUrl(category){
        this.allCategoriesBtn().click()
        this.categoryOption(category)
    }

    categoryHomePageTxt(category, headText){
        this.mainBarCategories(category).click()
        cy.contains(headText).should('be.visible')
    }

    categoryHomePageUrl(category){
        this.mainBarCategories(category).click()
    }



}

export default HomePage;