import { AuthorizedContext } from "../../utils/contexts/authorized-context";
import * as uuid from "uuid";
import { Transaction } from "../../utils/models/transaction";
import { getRandomString } from "../../utils/generateId";

describe('notification tests', function(){
    beforeEach(function(){
        cy.prepareContext<AuthorizedContext>(AuthorizedContext);
    })

    it('recieves notification', function(){
        cy.get<AuthorizedContext>('@ctx').then((ctx)=>{
            const transaction = new Transaction(
                12,
                new Date().toString(),
                "testing-" + getRandomString(5),
                "cy-" + getRandomString(3),
                new Date().toString(),
                "private",
                "bDjUb4ir5O",
                "qywYp6hS0U",
                "complete",
                uuid.v4(),
                "payment"
            )
            cy.sendPayment(transaction, ctx.token).then((interception)=>{
                expect(interception.status).to.be.equal(200);
            });
            
            cy.contains("Logout").click();
            cy.login("Allie2", Cypress.env("password"));
            cy.get('[data-test="transaction-list"]')
                .should('contain', "Arely Kertzmann paid Kaylin Homenick")
                .and('contain', "-$12.00")
                .and('contain', transaction.description);
        })
        
    })
})