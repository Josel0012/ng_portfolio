import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var Email: any;

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
      name: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject:['',[Validators.required]],
      message: ['',[Validators.required]]
    });

  }
  
  showValue():void{
    if(!this.emailForm.valid){
      console.log(this.emailForm);
      alert("All fields required!");
      return;
    }

    const email = {
      Host: "smtp.elasticemail.com",
      Username: "sfrankenstein734@gmail.com",
      Password: "A3AE452BCCCA08A2789278E6A9E4F098BEA9",
      To: "jslpega@gmail.com",
      From: this.emailForm.value.email,
      Subject: this.emailForm.value.subject,
      Body: this.emailForm.value.name + "<br><b>Body: </b>:" + this.emailForm.value.message
    };
    
    Email.send(email).then((err:any)=>{
      console.log(err);
    }
      
    );
  }
}
