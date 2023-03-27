describe('Home search tabs', function() {
    beforeEach(function(){
      // cy.loginViaAPI(Cypress.env('username'), Cypress.env('password')).then((token)=>{
      //   cy.log(token)
      //   cy.setCookie(token.name, token.value)
        
      // })
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