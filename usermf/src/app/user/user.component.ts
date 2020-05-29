import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
userName="Mike Andrew";
totalBalance="1,20,3400";
lastLogin="15May,2020"
  constructor() { }

  ngOnInit(): void {
  }

}
