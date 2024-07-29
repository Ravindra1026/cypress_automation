class ProductPage 
{
checkOutButton()
{
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
}
checkout()
{
    return cy.contains('Checkout')
}
country()
{
    return cy.get('#country')
}
countryName()
{
    return cy.get('.suggestions > ul > li > a')
}
getcheckBox()
{
    return cy.get('.checkbox')
}
submit()
{
    return cy.get('input[type = "submit"]')
}
getalert()
{
   return cy.get('.alert')
}
getprice()
{
    return cy.get('tr td:nth-child(4) strong')
}

}

export default ProductPage;