describe('Home transactions filter test', function () {
    beforeEach(function () {
        cy.visit('/');
        cy.login(Cypress.env('username'), Cypress.env('password'));
    })

    it.skip('filters by date', function () {
        cy.get('[data-test="transaction-list"]').should('contain', "Arely Kertzmann paid Edgar Johns");
        cy.get('[data-test="transaction-list-filter-date-range-button"]').click({force:true});
        cy.get('.Cal__MonthList__root').scrollTo(0, 103500);
        cy.get('[data-date="2019-08-31"]').click();
        cy.get('[data-date="2019-08-14"]').click();
        cy.get('[data-test="transaction-list"]').should('contain', "Edgar Johns charged Ibrahim Dickens");

    })

    it('filters by amount', function(){
        cy.get('[data-test="transaction-list"]').should('contain', "Arely Kertzmann paid Edgar Johns");
        cy.get('[data-test="transaction-list-filter-amount-range-button"]').click({force:true});
        cy.get('[data-test="transaction-list-filter-amount-range-slider"]').click(50,0);
        cy.get('[data-test="transaction-list-filter-amount-range-slider"]').click(150,0);
        cy.get('[data-test="transaction-list"]').should('contain', "Edgar Johns charged Ibrahim Dickens");
    })
})