import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactService {
    constructor(private http: HttpClient) { }

    getContacts(): Observable<Contact[]> {
        return this.http.get<Contact[]>('http://localhost:3000/contacts');
    }

    addContact(contact: Contact): Observable<Contact> {
        return this.http.post<Contact>('http://localhost:3000/contacts', contact);
    }

    getContact(contact: Contact): Observable<Contact> {
        return this.http.get<Contact>('http://localhost:3000/contact/' + contact._id);
    }

    editContact(contact: Contact): Observable<Contact> {
        return this.http.put<Contact>('http://localhost:3000/contact/' + contact._id, contact);
    }

    deleteContact(contact: Contact): Observable<Contact> {
        return this.http.delete<Contact>('http://localhost:3000/contact/' + contact._id);
    }

}
