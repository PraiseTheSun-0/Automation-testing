describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('/')

    // cy.contains('Sign In').click()

    // cy.url().should('include', 'signin')

    // cy.get('#username').type('Tavares_Barrows')

    // cy.get('#username').should('have.value', 'Tavares_Barrows')

    // cy.get('#password').type('s3cret')

    // cy.get('#password').should('have.value', 's3cret')

    // cy.contains('Sign In').click()

    // cy.url().should('not.contain', 'signin')

    cy.login('Tavares_Barrows','s3cret')
  })
})