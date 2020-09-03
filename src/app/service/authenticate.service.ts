import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private auth: AngularFireAuth) { }
  initSesion(email: string, passw: string)
  {
    return this.auth.signInWithEmailAndPassword(email, passw);
  }
}
