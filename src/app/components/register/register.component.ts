import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import validEmail from "../../transversal/validEmail";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  fullName: string;
  email: string;
  password: string;
  confirmpassword: string;
  successName: boolean;
  successfullPass: boolean;
  successfullEmail: boolean;
  successfullName: boolean;
  errorMsg: string;
  err: boolean;

  constructor(private router: Router) {
    this.fullName = "";
    this.email = "";
    this.password = "";
    this.confirmpassword = "";
    this.successName = false;
    this.successfullName = false;
    this.successfullPass = false;
    this.successfullEmail = false;
    this.errorMsg = "";
    this.err = false;
  }

  ngOnInit(): void {
  }

  signUp(): void {
    let newUser = { fullName: this.fullName, email: this.email, password: this.password };
    let users: object[];

    if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users"));
      users.forEach(user => {
        if (user === newUser) {
          this.err = true;
          this.errorMsg = "Usuario ya existe!";
        }
      });
    } else {
      users = [];
    }

    if (this.successfullName && this.successfullEmail && this.successfullPass) {
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      this.router.navigate(['/login'],{ skipLocationChange: true });
      alert("Registrado");
    }
  }

  cancel(): void {
    this.router.navigate(['/login'],{ skipLocationChange: true });
  }

  setFullName(event: KeyboardEvent): void {
    this.fullName = (event.target as HTMLInputElement).value;
    let re = new RegExp("^[A-Za-z ]+$");
    this.successfullName = re.test(this.fullName);
    if (!this.successfullName) {
      this.errorMsg = "Nombre no tiene formato válido";
      this.err = true;
    } else {
      this.err = false;
    }
  }

  setEmail(event: KeyboardEvent): void {
    this.email = (event.target as HTMLInputElement).value;
    let re = new RegExp(validEmail);
    this.successfullEmail = re.test(this.email);
    if (!this.successfullEmail) {
      this.errorMsg = "formato de E-mail incorrecto.";
      this.err = true;
    } else {
      this.err = false;
    }
  }

  setPassword(event: KeyboardEvent): void {
    this.password = (event.target as HTMLInputElement).value;
    let listRe = [
      { re: "(?=.*[a-z])", err: "La contraseña no tiene una letra minúscula." },
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
          this.errorMsg = r.err;
          this.err = true;
        }
      });
      if (count === listRe.length) {
        this.successfullPass = true;
        this.errorMsg = "";
        this.err = false;
      } else {
        this.err = true;
      }
    } else {
      this.successfullPass = false;
      this.err = true;
      this.errorMsg="Las contraseñas no coinciden.";
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
