    /// <reference types="Cypress" />

    // const { should } = require("chai");

    describe('My Seventh test suite', function()
    {
    it('My First test case', function()
    {
        
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get(".mouse-hover-content").invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')
    

    })
    })