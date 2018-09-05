export class User {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    constructor() {
        this.firstName = '',
            this.lastName = '',
            this.email = '',
            this.password = '';
    }
}
