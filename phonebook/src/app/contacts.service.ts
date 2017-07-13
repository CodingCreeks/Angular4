import { Injectable } from '@angular/core';

interface Contact {
  name: string;
  number: string;
}

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts() {
    let contacts: Contact[] = [
      {
        name: "Ram Surya",
        number: "123456575585"
      },
      {
        name: "Sam Surya",
        number: "456565655685"
      },
      {
        name: "Ravi Surya",
        number: "575756658787"
      }
    ];
    return contacts;
  }
}
