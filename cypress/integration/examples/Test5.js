/// <reference types="Cypress" />

// const { should } = require("chai");

describe('My Fifth test suite', function()
{
it('My First test case', function()
{
    //handle child parent windows 
      
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#opentab').invoke('removeAttr','target').click()
    cy.origin('https://www.qaclickacademy.com/', () =>
    {
        cy.get("#navbarSupportedContent a[href*= 'about']").click();
        cy.get('.mt-50 h2').should('contain', 'QAClick Academy');


    } )


})
})