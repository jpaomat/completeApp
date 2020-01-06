import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-panic',
  templateUrl: './button-panic.component.html',
  styleUrls: ['./button-panic.component.scss']
})
export class ButtonPanicComponent implements OnInit {
  sent=false;
  constructor(private routerService: Router) { }

  ngOnInit() {
  };
  close(){
    this.routerService.navigate([{ outlets: { buttonPanic: null } }]);
  }

}
