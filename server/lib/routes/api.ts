import { Request, Response } from "express";
import { ContactDBController } from "../controllers/contactController";
import { UserDBController } from "../controllers/userController";


export class Routes {
    public Contact: ContactDBController = new ContactDBController();
    public User: UserDBController = new UserDBController();

    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!! /n Welcome Here)'
                });

            });

        app.route('/contacts')
            .get( this.User.verifyToken, this.Contact.getContacts)
            .post(this.Contact.addNewContact);

        app.route('/contact/:contactId')
            .get(this.Contact.getContactWithID)
            .put(this.Contact.updateContact)
            .delete(this.Contact.deleteContact);



        app.route('/users')
            .get(this.User.getUsers);

        app.route('/register')
            .post(this.User.registerUser);

        app.route('/login')
            .post(this.User.loginUser)
    }


}