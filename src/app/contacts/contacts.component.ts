import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  emailForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      // Define your form controls here
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  showValue(): void {
    if (!this.emailForm.valid) {
      console.log(this.emailForm);
      alert('All fields required!');
      return;
    }

    const templateParams = {
      from_name: this.emailForm.value.name,
      from_email: this.emailForm.value.email,
      subject: this.emailForm.value.subject,
      message: this.emailForm.value.message,
    };

    emailjs
      .send(
        'service_n1xw0ta',
        'template_l199z09',
        templateParams,
        '6s7qHWlD5xDcYKif6'
      )
      .then(
        () => {
          alert('Message sent successfully!');
          this.emailForm.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          alert('Failed to send message.');
        }
      );
  }
}
