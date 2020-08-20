import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
  successfullPass: boolean;
  successfullEmail: boolean;
  errorMsg: string;


  constructor(private router: Router) {
    this.name = "";
    this.email = "";
    this.password = "";
    this.confirmpassword = "";
    this.successfullPass = false;
    this.successfullEmail = false;
    this.errorMsg = "";
  }

  ngOnInit(): void {
  }

  signUp(): void {
    try {
      let newUser = { name: this.name, email: this.email, password: this.password };
      let users: object[];
      if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));
        users.forEach(user => {
          if (user === newUser) {
            throw "Usuario ya existe!";
          }
        });
      } else {
        users = [];
      }
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      this.router.navigateByUrl("/");
      
    } catch (err) {
      alert(err);
    }
  }

  cancel(): void {
    this.router.navigateByUrl("/login");
  }

  setName(event: KeyboardEvent): void {
    this.name = (event.target as HTMLInputElement).value;
  }

  setEmail(event: KeyboardEvent): void {
    this.email = (event.target as HTMLInputElement).value;
    let re = new RegExp("");
    this.successfullEmail = re.test(this.email);
  }

  setPassword(event: KeyboardEvent): void {
    this.password = (event.target as HTMLInputElement).value;
    if (this.confirmpassword === this.password) {
      this.successfullPass = true;
    } else {
      this.successfullPass = false;
    }
  }

  setConfirmPassword(event: KeyboardEvent): void {
    this.confirmpassword = (event.target as HTMLInputElement).value;
    if (this.confirmpassword === this.password) {
      this.successfullPass = true;
    } else {
      this.successfullPass = false;
    }
  }
}
