/// <reference types="Cypress" />

// const { should } = require("chai");

describe('My Sixth test suite', function()
{
it('My First test case', function()
{
    //Handling table 
      
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get("tr td:nth-child(2)") .each(($e1, index, $list)=>{
        const text = $e1.text()
        if(text.includes("Python"))
            {
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                    const priceText= price.text()
                    expect(priceText).to.equal('25')
    
                })
            }
    })   

    })

})