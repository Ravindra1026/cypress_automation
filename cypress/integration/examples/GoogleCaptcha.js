/// <reference types="Cypress" />

describe('My First test suite', function()
{
it('My First test case', function()
{

   for(let number = 1; number<100;number++){
    cy.visit('https://staging.votermood.in/contactus');
    cy.get('#name').type('Ravindra')
    cy.get('#email').type('ravindra@gmail.com')
    cy.get(':nth-child(3) > input').type('9876543210')
    cy.get('#message').type('this is a test message. Ignor this message. This message is only for testing purpose.')
    cy.get('form > button').click()
   }


})
})