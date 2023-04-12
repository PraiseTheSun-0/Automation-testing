import { AuthorizedContext } from "../../utils/contexts/authorized-context"
import { getBankAccountNumber, getBankAccountNumberHelper, getBankNameHelper, getBankNameInput, getBankRoutingNumber, getBankRoutingNumberHelper, getCreateAccountHeader } from "../../utils/pages/bank-accounts"

describe('Interacting with bank accounts tests', function(){
    beforeEach(function(){
        cy.prepareContext<AuthorizedContext>(AuthorizedContext)
    })

    it('creates new bank account', function(){
        cy.visit('/bankaccounts')
        cy.contains('Create').click()
        cy.url().should('contain', "new")
        getCreateAccountHeader().should('have.text', "Create Bank Account")

        getBankNameInput().focus().blur()
        cy.contains("Save").should('be.disabled')
        getBankNameHelper().should('contain', "Enter a bank name")
        getBankNameInput().type("123")
        getBankNameHelper().should('contain', "Must contain at least 5 characters")
        getBankNameInput().clear().type("The Best Bank")

        getBankRoutingNumber().focus().blur()
        getBankRoutingNumberHelper().should('contain', "Enter a valid bank routing number")
        getBankRoutingNumber().type("123")
        getBankRoutingNumberHelper().should('contain', "Must contain a valid routing number")
        getBankRoutingNumber().clear().type("987654321")

        getBankAccountNumber().focus().blur()
        getBankAccountNumberHelper().should('contain', "Enter a valid bank account number")
        getBankAccountNumber().type("123")
        getBankAccountNumberHelper().should('contain', "Must contain at least 9 digits")
        getBankAccountNumber().type("456789")

        cy.contains('Save').click()
        cy.url().should('not.contain', "new")
        cy.get('[data-test="bankaccount-list"] > :nth-last-child(1)')
            .should('contain', "The Best Bank").and('contain', "Delete")
    })

    it('deletes last bank account', function(){
        cy.visit('/bankaccounts')
        cy.get('[data-test="bankaccount-list"] > :nth-last-child(1)')
            .contains("Delete").click()
        cy.get('[data-test="bankaccount-list"] > :nth-last-child(1)')
            .should('contain', "(Deleted)")
    })
})