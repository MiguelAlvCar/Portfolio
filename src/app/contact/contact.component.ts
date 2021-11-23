import { Component, OnInit } from '@angular/core';
import { MessageClass } from './contact-model';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

const BASE_URL = 'https://avocadoswars.azurewebsites.net/api/portfolio'

@Component({
  selector: 'mac-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private http: HttpClient) { 

  }

  public message = new MessageClass();

  public messageSend = false;
  public sendingMessage = false;

  sendMessage (form: NgForm):void{   
    this.sendingMessage = true; 
    this.http.post<boolean>(BASE_URL, this.message).subscribe(succeeded => {
      if (succeeded){
        this.messageSend = true;
        this.message = new MessageClass();
        form.form.markAsPristine();
        form.form.markAsUntouched();
        this.sendingMessage = false; 
      }      
    })
  }

}
