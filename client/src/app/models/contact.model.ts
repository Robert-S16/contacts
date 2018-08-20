export class Contact {
        id: string;
        _id: string;
        firstName: string;
        lastName: string;
        phone: number;
        company?: string;
        email: string;
        createdDate?: number;
        constructor() {
                this.id = '',
                this._id = '',
                this.firstName = '',
                this.lastName = '',
                this.phone = 0,
                this.company = '',
                this.email = '',
                this.createdDate = 0;
        }
}
