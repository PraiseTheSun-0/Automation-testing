export const path = '/bankaccounts';
export const selectors = {
    createAccountHeader: "create-account-header",
    bankNameInput: '#bankaccount-bankName-input',
    bankNameHelper: '#bankaccount-bankName-input-helper-text',
    bankRoutingNumber: '#bankaccount-routingNumber-input',
    bankRoutingNumberHelper: '#bankaccount-routingNumber-input-helper-text',
    bankAccountNumber: '#bankaccount-accountNumber-input',
    bankAccountNumberHelper: '#bankaccount-accountNumber-input-helper-text'
}
export const getCreateAccountHeader = () => {
    return cy.getByDT(selectors.createAccountHeader);
};
export const getBankNameInput = () => {
    return cy.get(selectors.bankNameInput);
};
export const getBankNameHelper = () => {
    return cy.get(selectors.bankNameHelper);
};
export const getBankRoutingNumber = () => {
    return cy.get(selectors.bankRoutingNumber);
};
export const getBankRoutingNumberHelper = () => {
    return cy.get(selectors.bankRoutingNumberHelper);
};
export const getBankAccountNumber = () => {
    return cy.get(selectors.bankAccountNumber);
};
export const getBankAccountNumberHelper = () => {
    return cy.get(selectors.bankAccountNumberHelper);
};



