
Cypress.Commands.add('GetMethod', (cep)=>{
    cy.request({
        method: 'GET',
        url: `https://viacep.com.br/ws/${cep}/json/`,
        failOnStatusCode: false
    })
})