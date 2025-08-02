import { Component } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { authState } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user$ = authState(this.auth);

  constructor(private auth: Auth, private router: Router) {}

  async logout() {
    await signOut(this.auth);
    this.router.navigate(['/login']);
  }
}