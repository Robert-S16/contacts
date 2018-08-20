 import {Request, Response} from "express";
 import { ContactDBController } from "../controllers/crmController";

export class Routes {       
    public Contact: ContactDBController = new ContactDBController();

    public routes(app): void {          
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });

        }); 

        app.route('/contacts')
        .get(this.Contact.getContacts)
        .post(this.Contact.addNewContact);

        app.route('/contact/:contactId')
        .get(this.Contact.getContactWithID)
        .put(this.Contact.updateContact)        
        .delete(this.Contact.deleteContact);
    }
}