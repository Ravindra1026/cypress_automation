/// <reference types="Cypress" />

describe('My Second test suite', function()
{
it('My First test case', function()
{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    cy.get('.products').find('.product').each(($el, index, $list)=> {
        const textVeg=$el.find('h4.product-name').text()
        if (textVeg.includes('Cashews'))
            {
               cy.wrap ($el).find('button').click()
            }
    })
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
    




} )
    
} )