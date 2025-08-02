import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private auth: Auth, private router: Router) {}

  login(): void {
    signInWithPopup(this.auth, new GoogleAuthProvider())
      .then(() => this.router.navigate(['/']))
      .catch(err => console.error('Authentication failed', err));
  }
}