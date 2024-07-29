/// <reference types="Cypress" />
import ProductPage from "./pageObjects/ProductPage"
import HomePage from "./pageObjects/homePage"
describe('My First FremworkTest suite', function()
{

    before(() => {

        // runs once before all tests
        cy.fixture('example').then(function(data)
     {

this.data = data
     })

      })

  it('My First test case', function()
   {
    const homePage = new HomePage()
    const productPage = new ProductPage()
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should('have.value',this.data.name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntrepreneur().should('be.disabled')
    homePage.getShopTab().click()
    Cypress.config('defaultCommandTimeout',8000)

   // cy.pause()

    this.data.productName.forEach(function(element){
        cy.selectProduct(element)
    });
    productPage.checkOutButton().click();
    var sum = 0

    productPage.getprice().each(($el, index, $list) =>{

        //const amount = $el.text()
        
        const amount = $el.text()
        var res = amount.split(" ")
        res = res[1].trim()
        sum = Number(sum)+Number(res)
        //cy.log(res)
    }).then(function(){
        cy.log(sum)
    })
    cy.get('h3 strong').then(function(element){
        const amount = element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
    })
    
    productPage.checkout().click()
    productPage.country().type('india')
    productPage.countryName().click()
    productPage.getcheckBox().click()
    productPage.submit().click()
    productPage.getalert().then(function (element)
    {
        const actualText = element.text()
        expect(actualText.includes("Success")).to.be.true
    })



   // cy.selectProduct('Blackberry')
   // cy.selectProduct('Nokia Edge')
   





   } )
    
})





