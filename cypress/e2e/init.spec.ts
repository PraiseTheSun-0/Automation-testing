describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('/')

    cy.contains('Sign In').click()
  })
})