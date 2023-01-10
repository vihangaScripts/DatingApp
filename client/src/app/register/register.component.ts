import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  register() {}

  cancel() {}
}
