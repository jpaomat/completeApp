import { Component, OnInit } from '@angular/core';
import { allowDeactivate } from 'src/app/guards/can-deactivate.guard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
}) 
export class ContactComponent implements OnInit, allowDeactivate {
  
  sent=false;
  message:string;
  constructor() { }  
  
  send(){
    alert('Message sent'+' '+ this.message);
    this.sent=true;
  };
  allowLeaveRoute(): boolean | import("rxjs").Observable<boolean> | Promise<boolean> 
  {
    if(!this.message || this.sent){ //sino hay mensaje o si se envio
      return true;
    }
    const confirm= window.confirm('Do you want to go out and lose changes made?');
    return confirm;
  }
  ngOnInit() {
  }
}
