import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  @Input() contacts: any[] = [];
  @Output() contactEdit: EventEmitter<any> = new EventEmitter<any>();

  editContact(contact: any): void {
    this.contactEdit.emit(contact);
  }
}
