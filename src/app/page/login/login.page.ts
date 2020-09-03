import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../service/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit
{
  // Declaraciones
  email: string;
  password: string;
  mensaje: string;

  constructor(
    private login: LoginService,
    private authServise: AuthenticateService,
    private router: Router) { }

  ngOnInit() {}


  validateEmailPassw()
  {
    this.authServise.initSesion(this.email, this.password).then(resp =>
    {
        this.mensaje = 'Bienvenido';
    }).catch(error => {
      this.mensaje = error.message;
    });
  }
}
