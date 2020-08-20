import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string;
  password: string;

  constructor(private router: Router) {
    this.user = "";
    this.password = "";
  }

  ngOnInit(): void {
  }

  logIn(): void {
    this.router.navigateByUrl("/");
  }

  signUp(): void {
    this.router.navigateByUrl("/signup");
  }

  setName(event: KeyboardEvent): void {
    this.user = (event.target as HTMLInputElement).value;
  }

  setPassword(event: KeyboardEvent): void {
    this.password = (event.target as HTMLInputElement).value;
  }

}