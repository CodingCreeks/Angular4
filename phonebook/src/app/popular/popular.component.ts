import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  contacts: any[];

  constructor(private contactService: ContactsService) { }

  ngOnInit() {
    this.contacts=this.contactService.getContacts().slice(0,3);
  }

}
