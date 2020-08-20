import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  name: string;
  fullName: string;
  email: string;
  password: string;
  confirmpassword: string;
  successName: boolean;
  successfullPass: boolean;
  successfullEmail: boolean;
  successfullName: boolean;
  errorMsg: string;

  constructor(private router: Router) {
    this.name = "";
    this.fullName = "";
    this.email = "";
    this.password = "";
    this.confirmpassword = "";
    this.successName = false;
    this.successfullName = false;
    this.successfullPass = false;
    this.successfullEmail = false;
    this.errorMsg = "";
  }

  ngOnInit(): void {
  }

  signUp(): void {

    let newUser = { name: this.name, fullName: this.fullName, email: this.email, password: this.password };
    let users: object[];
    if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users"));
      users.forEach(user => {
        if (user === newUser) {
          alert("Usuario ya existe!");
        }
      });
    } else {
      users = [];
    }
    if (this.successfullName && this.successName && this.successfullEmail && this.successfullPass) {
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      this.router.navigateByUrl("/login");
      alert("Registrado");
    } else {
      this.errorMsg += "\nAlgunos campos no se llenaron correctamente"
    }


  }

  cancel(): void {
    this.router.navigateByUrl("/login");
  }

  setName(event: KeyboardEvent): void {
    this.name = (event.target as HTMLInputElement).value;
    let re = new RegExp("^[A-Za-z0-9]+$");
    this.successName = re.test(this.name);
  }

  setFullName(event: KeyboardEvent): void {
    this.fullName = (event.target as HTMLInputElement).value;
    let re = new RegExp("^[A-Za-z]+[ ]*[A-Za-z]+$");
    this.successfullName = re.test(this.fullName);
  }

  setEmail(event: KeyboardEvent): void {
    this.email = (event.target as HTMLInputElement).value;
    let re = new RegExp("^[A-Za-z0-9]+[\.\_\-]{0,1}[A-Za-z0-9]+@[A-Za-z0-9]+[\.\_\-]{0,1}[A-Za-z0-9]+\.[A-Za-z]+$");
    this.successfullEmail = re.test(this.email);
  }

  setPassword(event: KeyboardEvent): void {
    this.password = (event.target as HTMLInputElement).value;
    let listRe = [
      { re: "(?=.*[a-z])", err: "La contraseña no tiene una letra minuscula." },
      { re: "(?=.*[A-Z]{2,})", err: "La contraseña no posee dos letras mayúsculas" },
      { re: "(?=.*[0-9])", err: "Debe haber almenos un número." },
      { re: "(?=.*[!@#$%^&*])", err: "Debe contener un caracter especial." },
      { re: "(?=.{8,})", err: "Debe superar los ocho caracteres" },
    ];
    if (this.confirmpassword === this.password) {
      let count = 0;
      listRe.forEach(r => {
        let re = RegExp(r.re);
        if (re.test(this.password)) {
          count += 1;
        } else {
          this.errorMsg += "\n" + r.err;
        }
      });
      if (count === listRe.length) {
        this.successfullPass = true;
        this.errorMsg="";
      }
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
