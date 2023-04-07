import { SettingsContext } from "../../utils/contexts/settings-context"


describe('User settings', function() {
    beforeEach(function(){
        cy.prepareContext<SettingsContext>(SettingsContext)
        cy.get<SettingsContext>('@ctx').then((ctx)=>{
            cy.visit('/user/settings');
            cy.get('[data-test="user-settings-firstName-input"]').then(($text)=>{
                ctx.username = $text.val()?.toString();
            })
            cy.get('[data-test="user-settings-lastName-input"]').then(($text)=>{
                ctx.lastname = $text.val()?.toString();
            })
            cy.get('[data-test="user-settings-email-input"]').then(($text)=>{
                ctx.email = $text.val()?.toString();
            })
            cy.get('[data-test="user-settings-phoneNumber-input"]').then(($text)=>{
                ctx.phone = $text.val()?.toString();
            })
        })
    })

    afterEach(function(){
        cy.get<SettingsContext>('@ctx').then((ctx)=>{
            ctx.reset();
        })
    })

    it('changes name', function(){
        cy.get<SettingsContext>('@ctx').then((ctx)=>{
            const newName = ctx.username + "123";
            cy.visit('/user/settings');
            cy.get('[data-test="user-settings-firstName-input"]').clear().type(newName);
            
            cy.intercept('PATCH', `**/users/${ctx.id}`).as('patchUserSettings')
            cy.contains("Save").click();
            cy.wait('@patchUserSettings').then((interception)=>{
                expect(interception.response?.statusCode).to.be.equal(204);
            });
            cy.reload();

            cy.get('[data-test="user-settings-firstName-input"]').invoke('val')
                .should('equal', newName);
            cy.get('[data-test="sidenav-user-full-name"]')
                .should('contain', newName);
        })
        
    })

    it('changes lastname', function(){
        cy.get<SettingsContext>('@ctx').then((ctx)=>{
            cy.get('[data-test="user-settings-lastName-input"]').clear().blur();
            cy.get('#user-settings-lastName-input-helper-text')
                .should('contain', "Enter a last name");
            cy.get('[data-test="user-settings-lastName-input"]').type("Pntr");
            cy.intercept('PATCH', `**/users/${ctx.id}`).as('patchUserSettings');
            cy.contains("Save").click();
            cy.wait('@patchUserSettings').then((interception)=>{
                expect(interception.response?.statusCode).to.be.equal(204);
            });
            cy.wait(2000);
            cy.reload();
            cy.get('[data-test="user-settings-lastName-input"]').invoke('val')
                .should('equal', "Pntr");
            cy.get('[data-test="sidenav-user-full-name"]')
                .should('contain', "P");
        })
    })

    it('changes email', function(){
        cy.get<SettingsContext>('@ctx').then((ctx)=>{
            cy.get('[data-test="user-settings-email-input"]').clear().type("123");
            cy.get('#user-settings-email-input-helper-text')
                .should('contain', "Must contain a valid email address");
            cy.get('[data-test="user-settings-email-input"]').clear().type("newEmail@mail.com");
            cy.intercept('PATCH', `**/users/${ctx.id}`).as('patchUserSettings');
            cy.contains("Save").click();
            cy.wait('@patchUserSettings').then((interception)=>{
                expect(interception.response?.statusCode).to.be.equal(204);
            });
            cy.wait(2000);
            cy.reload();
            cy.get('[data-test="user-settings-email-input"]').invoke('val')
                .should('equal', "newEmail@mail.com");
        })
    })

    it('changes phone', function(){
        cy.get<SettingsContext>('@ctx').then((ctx)=>{
            cy.get('[data-test="user-settings-phoneNumber-input"]').clear().blur();
            cy.get('#user-settings-phoneNumber-input-helper-text')
                .should('contain', "Enter a phone number");
            cy.get('[data-test="user-settings-phoneNumber-input"]').type("123");
            cy.get('#user-settings-phoneNumber-input-helper-text')
                .should('contain', "Phone number is not valid");
            cy.get('[data-test="user-settings-phoneNumber-input"]').clear().type("123-123");
            cy.intercept('PATCH', `**/users/${ctx.id}`).as('patchUserSettings');
            cy.contains("Save").click();
            cy.wait('@patchUserSettings').then((interception)=>{
                expect(interception.response?.statusCode).to.be.equal(204);
            });
            cy.reload();
            cy.get('[data-test="user-settings-phoneNumber-input"]').invoke('val')
                .should('equal', "123-123");
        })
    })
})