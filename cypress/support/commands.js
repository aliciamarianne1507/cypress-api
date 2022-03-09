
Cypress.Commands.add('GetMethod', (cep)=>{
    cy.request({
        method: 'GET',
        url: `${Cypress.env('baseurl') + cep}/json`,
        failOnStatusCode: false
    })
})