import HomePage from "../pages/HomePage"

const homePage = new HomePage()

describe('Netshoes menu', () => {
  beforeEach(() => {
  
    cy.visit('https://www.netshoes.com.br')

  })

  it(['category'],'verify all netshoes  main categories', () => {
    
    homePage.allCategoriesBtn().click();
    
    homePage.allCategoryVal();

  })

  it(['category'],'verify netshoes Masculino category', () => {
     
    homePage.categoryValText('Masculino','SELEÇÃO DE PRODUTOS PRA ELES!');

   })

  it(['category'],'verify netshoes Feminino category', () => {

    homePage.categoryValText('Feminino','SELEÇÃO DE PRODUTOS PRA ELAS!')
  
   })

   it(['category'],'verify netshoes Infantil category', () => {

    homePage.categoryValUrl('Infantil')
    cy.url().should('include', '/infantil')
    
   })

   it(['category'],'verify netshoes Calçados category', () => {

    homePage.categoryValText('Calçados','CALÇADOS' )
   })

   it(['category'],'verify netshoes Roupas category', () => {

    homePage.categoryValText('Roupas','CONFORTO E ESTILO PARA O DIA TODO')
  
   })

   it(['category'],'verify netshoes Suplementos category', () => {

    homePage.categoryValUrl('Suplementos')
    cy.url().should('include', '/suplementos')
   })

   it(['category'],'verify netshoes Games category', () => {

    homePage.categoryValText('GAMES', 'games games')

   })

   it(['category'],'verify netshoes Equipamentos category', () => {

    homePage.categoryValText('Equipamentos','Equipamentos e Acessórios Fitness')
      
   })

   it(['category'],'verify netshoes Promoções category', () => {

    homePage.categoryValText('Promoções','OUTLET COM ATÉ 70% OFF')
  

   })

   it(['category'],'verify netshoes Categorias category', () => {

    homePage.categoryValUrl('Categorias')
    cy.url().should('include', 'categorias')
    
   })
   
   it(['category'],'verify netshoes Sportstyle category', () => {

    homePage.categoryHomePageUrl('SPORTSTYLE')
    cy.url().should('include', '/sportstyle')

   })

   it(['category'],'verify netshoes Corrida category', () => {

    homePage.categoryHomePageUrl('CORRIDA')
    cy.url().should('include', '/corrida')

   })

   it(['category'],'verify netshoes Futebol category', () => {

    homePage.categoryHomePageUrl('FUTEBOL')
    cy.url().should('include', '/futebol')

   })

   it(['category'],'verify netshoes Lojas Parceiras category', () => {

    homePage.categoryHomePageUrl('LOJAS PARCEIRAS')
    cy.url().should('include', '/lojasparceiras')

   })

   it(['category'],'verify netshoes Black November category', () => {

    homePage.categoryHomePageUrl('BLACK NOVEMBER')
    cy.url().should('include', '/black-friday')

   })

   it(['category'],'verify netshoes Cupons category', () => {

    homePage.categoryHomePageTxt('CUPONS','Cupons Netshoes')

   })

})
