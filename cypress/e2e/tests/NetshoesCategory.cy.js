import HomePage from "../pages/HomePage"

const homePage = new HomePage()

describe('Netshoes menu', () => {
  beforeEach(() => {
  
    cy.visit('https://www.netshoes.com.br')

  })

  it('verify all netshoes  main categories', () => {
    
    homePage.allCategoriesBtn().click();
    
    homePage.allCategoryVal();

  })

  it('verify netshoes Masculino category @category', () => {
     
    homePage.categoryValText('Masculino','SELEÇÃO DE PRODUTOS PRA ELES!');

   })

  it('verify netshoes Feminino category @category', () => {

    homePage.categoryValText('Feminino','SELEÇÃO DE PRODUTOS PRA ELAS!')
  
   })

   it('verify netshoes Infantil category @category @category', () => {

    homePage.categoryValUrl('Infantil')
    cy.url().should('include', '/infantil')
    
   })

   it('verify netshoes Calçados category @category', () => {

    homePage.categoryValText('Calçados','CALÇADOS' )
   })

   it('verify netshoes Roupas category @category', () => {

    homePage.categoryValText('Roupas','CONFORTO E ESTILO PARA O DIA TODO')
  
   })

   it('verify netshoes Suplementos category @category', () => {

    homePage.categoryValUrl('Suplementos')
    cy.url().should('include', '/suplementos')
   })

   it('verify netshoes Games category @category', () => {

    homePage.categoryValText('GAMES', 'games games')

   })

   it('verify netshoes Equipamentos category @category', () => {

    homePage.categoryValText('Equipamentos','Equipamentos e Acessórios Fitness')
      
   })

   it('verify netshoes Promoções category @category', () => {

    homePage.categoryValText('Promoções','OUTLET COM ATÉ 70% OFF')
  

   })

   it('verify netshoes Categorias category @category', () => {

    homePage.categoryValUrl('Categorias')
    cy.url().should('include', 'categorias')
    
   })
   
   it('verify netshoes Sportstyle category @category', () => {

    homePage.categoryHomePageUrl('SPORTSTYLE')
    cy.url().should('include', '/sportstyle')

   })

   it('verify netshoes Corrida category @category', () => {

    homePage.categoryHomePageUrl('CORRIDA')
    cy.url().should('include', '/corrida')

   })

   it('verify netshoes Futebol category @category', () => {

    homePage.categoryHomePageUrl('FUTEBOL')
    cy.url().should('include', '/futebol')

   })

   it('verify netshoes Lojas Parceiras category @category', () => {

    homePage.categoryHomePageUrl('LOJAS PARCEIRAS')
    cy.url().should('include', '/lojasparceiras')

   })

   it('verify netshoes Black November category @category', () => {

    homePage.categoryHomePageUrl('BLACK NOVEMBER')
    cy.url().should('include', '/black-friday')

   })

   it('verify netshoes Cupons category @category', () => {

    homePage.categoryHomePageTxt('CUPONS','Cupons Netshoes')

   })

})
