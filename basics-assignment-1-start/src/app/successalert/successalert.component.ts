import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successalert',
  templateUrl: './successalert.component.html',
  styleUrls: ['./successalert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  successMessage = 'Success Alert Message';
  constructor() { }

  ngOnInit() {
  }

}
