/// <reference types="Cypress" />

// const { should } = require("chai");

describe('My fourth test suite', function()
{
it('My First test case', function()
{
    //Check boxes  
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()
    cy.on('window:alert', (str)=>
    {
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

})
})
