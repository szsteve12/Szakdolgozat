import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
		private auth: AuthService,
	) {}

login() {
  console.log("Kuldom")
  this.auth.login(this.username, this.password).subscribe();
}

}
