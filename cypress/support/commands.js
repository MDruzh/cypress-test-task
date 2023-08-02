// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addItemsToCart', (amount) => {
    for (let i = 0; i < amount; i++) {
        cy.get('div.inventory_item').eq(i).find('button').click()
    }
})

Cypress.Commands.add('login', () => {
    cy.fixture('example').then(function (data) {
        this.data = data
        cy.visit('/')
        cy.get('#user-name').type(this.data.username)
        cy.get('#password').type(this.data.password)
        cy.get('#login-button').click()
    })
})

Cypress.Commands.add('fillInTheForm', () => {
    cy.get('#first-name').type('Max')
    cy.get('#last-name').type('Brown')
    cy.get('#postal-code').type('00000')
    cy.get('#continue').click()
})