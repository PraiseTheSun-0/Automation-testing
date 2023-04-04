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
            cy.sendPayment(new Transaction(
                12,
                new Date().toString(),
                "testing + " + getRandomString(5),
                getRandomString(),
                new Date().toString(),
                "private",
                "bDjUb4ir5O",
                "qywYp6hS0U",
                "complete",
                uuid.v4(),
                "payment"
            ), ctx.token).then((interception)=>{
                expect(interception.status).to.be.equal(200);
            });

            cy.visit('/notifications');
        })
        
    })
})