import { AuthorizedContext } from "../../utils/contexts/authorized-context";
import { uniqueId } from "lodash";
import { Transaction } from "../../utils/models/transaction";
import { randomUUID } from "crypto";

describe('notification tests', function(){
    beforeEach(function(){
        cy.prepareContext<AuthorizedContext>(AuthorizedContext);
    })

    it('recieves notification', function(){
        cy.get<AuthorizedContext>('@ctx').then((ctx)=>{
            cy.sendPayment(new Transaction(
                12400,
                new Date().toString(),
                "111",
                "YtG2HFLhc",
                new Date().toString(),
                "private",
                "bDjUb4ir5O",
                "qywYp6hS0U",
                "complete",
                "u23bnjbfyew7"
            ), ctx.token).then((interception)=>{
                expect(interception.response?.statusCode).to.be.equal(200);
            });
            cy.visit('/notifications');
        })
        
    })
})