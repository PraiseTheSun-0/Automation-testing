import { AuthorizedContext } from "../../utils/contexts/authorized-context";
import { getRandomString } from "../../utils/generateId";

describe('User settings', function() {
    beforeEach(function(){
        cy.prepareContext<AuthorizedContext>(AuthorizedContext);
    })

    it('creates new transaction', function(){
        cy.get<AuthorizedContext>('@ctx').then((ctx)=>{
            cy.get('[data-test="sidenav-user-balance"]').then(($text)=>{
                const balance = $text.text();
                const id = getRandomString(5);
                
                cy.get('[data-test="nav-top-new-transaction"]').click();
                cy.get('[data-test="user-list-search-input"]').type("Kaylin");
                cy.get('[data-test="user-list-item-bDjUb4ir5O"]').click();
                cy.get('#amount').type("1");
                cy.get('#transaction-create-description-input').type(id);
                cy.get('[data-test="transaction-create-submit-payment"]').click();
                cy.get('[data-test="main"]').should('contain', "Paid $1.00 for " + id);
                
                cy.visit('/personal');
                cy.wait(2000);

                cy.get('[data-test="transaction-list"]').should('contain', "Arely Kertzmann paid Kaylin Homenick")
                    .and('contain', id);
                cy.get('[data-test="sidenav-user-balance"]').should(($text)=>{
                    expect($text.text()).not.to.eq(balance);
                })
            })
        })
    })
})