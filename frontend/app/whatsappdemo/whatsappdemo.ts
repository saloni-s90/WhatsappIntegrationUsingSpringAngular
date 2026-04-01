import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Integration } from '../services/integration';

@Component({
  selector: 'app-whatsappdemo',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './whatsappdemo.html',
  styleUrl: './whatsappdemo.css',
})
export class Whatsappdemo {

  constructor(private integrationService: Integration) { }

  phone: string = '';
  message: string = '';

  onsendWhatsappMessage() {
    const payload = { to: this.phone, message: this.message }
    this.integrationService.onSubmit(payload).subscribe({
      next: (res) => {
        console.log("message send on whatsapp successfully !!!", res);
        alert("Message send on whatsapp!!!")
        
      }
      // error:(err) => {
      //   console.log("Error while sending message ", err);
      //   alert("error while sending message on whatsapp!!!")
      // }
    })
  }

}
