import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
// import { BsDropdownModule } from 'ngx-bootstrap/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;

  constructor(
    private http: HttpClient,
    public accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/appUsers').subscribe({
      next: (response) => (this.users = response),
      error: (error) => console.log(error),
      //complete: () => console.log('Request has completed'),
    });
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
