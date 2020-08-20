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
  msgErr: string;
  err: boolean;

  constructor(private router: Router) {
    this.user = "";
    this.password = "";
    this.msgErr = "";
    this.err = false;
  }

  ngOnInit(): void {
    this.validSession();
  }

  logIn(): void {

    if (localStorage.getItem("users")) {

      let users = JSON.parse(localStorage.getItem("users"));

      users.forEach(user => {
        if (user.name === this.user && user.password === this.password) {
          sessionStorage.setItem("userAuth", this.user);
        }
      });

    }

    this.validSession();
  }

  validSession() {
    if (sessionStorage.getItem("userAuth")) {
      this.router.navigateByUrl("/");
    } else {
      this.err = true;
      if(this.user && this.password){
        this.msgErr = "Credenciales incorrectas";
      } else {
        this.err = false;
        this.msgErr = "";
      }
      
    }
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