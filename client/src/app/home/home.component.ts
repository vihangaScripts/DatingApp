import { Component, OnInit } from '@angular/core';
// import { BsDropdownModule } from 'ngx-bootstrap/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor() {}

  ngOnInit(): void {}

  registerToggle() {
    this.registerMode = !this.registerMode;
  }
}
