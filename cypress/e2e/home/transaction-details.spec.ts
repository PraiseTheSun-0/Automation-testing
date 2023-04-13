describe('Transaction details tests', function () {
    beforeEach(function () {
        cy.visit('/');
        cy.login(Cypress.env('username'), Cypress.env('password'));
    })

    it('tests like', function () {
        cy.intercept('GET', Cypress.env('apiUrl') + "/transactions/**").as("req");
        cy.contains("Arely Kertzmann paid Edgar Johns").click();
        cy.wait('@req').then((intercept) => {
            expect(intercept.response?.statusCode).equal(200);
            if (intercept.response?.body.transaction.likes.findIndex((like)=>like.userId === "qywYp6hS0U") != -1)  {
                cy.get('[data-test="transaction-like-button"]').should('be.disabled');

            }
            else {
                cy.intercept('POST', Cypress.env('apiUrl') + "/likes/*").as('like');
                cy.get('[data-test="transaction-like-button"]').click();  
                cy.wait('@like').then((res)=>{
                    expect(res.response?.statusCode).equal(200);
                })
            }
        })
    })
})