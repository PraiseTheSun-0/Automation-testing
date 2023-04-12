describe('Home search tabs tests', function() {
    beforeEach(function(){
      cy.visit('/');
      cy.login(Cypress.env('username'), Cypress.env('password'));
    })

    it('opens "everyone" tab', function() {
        cy.contains('Everyone').click();
        cy.get('.MuiListSubheader-root').should('contain', 'Public');
    })

    it('opens "friends" tab', function() {
      cy.contains('Friends').click();
      cy.get('.MuiListSubheader-root').should('contain', 'Contacts');
    })

    it('opens "mine" tab', function() {
      cy.contains('Mine').click();
      cy.get('.MuiListSubheader-root').should('contain', 'Personal');
    })
})