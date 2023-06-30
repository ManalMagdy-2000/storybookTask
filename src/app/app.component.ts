import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactList: any[] = [];

  ngOnInit() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.contactList = JSON.parse(storedContacts);
    }
  }

  saveContact(contact: any): void {
    this.contactList.push(contact);
    localStorage.setItem('contacts', JSON.stringify(this.contactList));
  }
}
