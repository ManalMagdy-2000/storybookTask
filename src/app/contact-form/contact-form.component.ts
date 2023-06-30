import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  @Input() contact: any = {
    name: '',
    phone: '',
    email: '',
    dob: '',
    id: ''
  };
  @Output() contactSaved: EventEmitter<any> = new EventEmitter<any>();
  @Output() contactUpdated: EventEmitter<any> = new EventEmitter<any>();

  isFormSubmitted = false;

  get nameInvalid(): boolean {
    return this.isFormSubmitted && !this.contact.name;
  }

  get phoneInvalid(): boolean {
    return this.isFormSubmitted && (!this.contact.phone || !/^[0-9]{10}$/.test(this.contact.phone));
  }

  get emailInvalid(): boolean {
    return this.isFormSubmitted && (!this.contact.email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(this.contact.email));
  }

  get dobInvalid(): boolean {
    return this.isFormSubmitted && !this.contact.dob;
  }

  get idInvalid(): boolean {
    return this.isFormSubmitted && !this.contact.id;
  }

  get isFormInvalid(): boolean {
    return (
      this.nameInvalid ||
      this.phoneInvalid ||
      this.emailInvalid ||
      this.dobInvalid ||
      this.idInvalid
    );
  }

  handleAvatarChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.contact.avatar = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  handleSave(): void {
    this.isFormSubmitted = true;
    if (!this.isFormInvalid) {
      this.contactSaved.emit(this.contact);
      this.resetForm();
    }
  }

  handleUpdate(): void {
    this.isFormSubmitted = true;
    if (!this.isFormInvalid) {
      this.contactUpdated.emit(this.contact);
    }
  }

  resetForm(): void {
    this.contact = {
      name: '',
      phone: '',
      email: '',
      dob: '',
      id: ''
    };
    this.isFormSubmitted = false;
  }
}
