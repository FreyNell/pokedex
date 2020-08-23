import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import validEmail from "../../transversal/validEmail";
import "../../../assets/logo.png";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  msgErr: string;
  err: boolean;


  constructor(private router: Router) {
    this.email = "";
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
        if (user.email === this.email && user.password === this.password) {
          sessionStorage.setItem("userAuth", user.fullName);
        }
      });

    }

    this.validSession();
  }

  validSession() {
    if (sessionStorage.getItem("userAuth")) {
      this.router.navigate(['/'],{ skipLocationChange: true });
    } else {
      this.err = true;
      if (this.email && this.password) {
        this.msgErr = "Credenciales incorrectas";
      } else {
        this.err = false;
        this.msgErr = "";
      }

    }
  }

  signUp(): void {
    this.router.navigate(['/signup'],{ skipLocationChange: true });
  }

  setEmail(event: KeyboardEvent): void {
    this.email = (event.target as HTMLInputElement).value;
    let re = new RegExp(validEmail);
    this.err = !re.test(this.email);
    if (this.err) {
      this.msgErr = "El formato del email no es valido.";
    } else {
      this.msgErr = "";
    }
  }

  setPassword(event: KeyboardEvent): void {
    this.password = (event.target as HTMLInputElement).value;
  }

}