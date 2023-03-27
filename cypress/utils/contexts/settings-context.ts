import { AuthorizedContext } from "./authorized-context";

export class SettingsContext extends AuthorizedContext{
    id: string;
    username?: string;
    lastname?: string;
    email?: string;
    phone?: string;
    constructor(token: string){
        super(token);
        this.id = JSON.parse(localStorage.getItem('authState')).context.user.id;

    }

    reset(){
        cy.apiRequest('PATCH', `/users/${this.id}`, this.token, {
            "id": this.id,
            "firstName": this.username,
            "lastName": this.lastname,
            "email": this.email,
            "phoneNumber": this.phone,
            "defaultPrivacyLevel": "private"
        })
    }
}