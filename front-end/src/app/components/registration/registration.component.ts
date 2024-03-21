import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  username: string = '';
  newPassword: string = '';

  constructor(
		private auth: AuthService,
	) {}

signup() {
  console.log("Kuldom")
  this.auth.login(this.username, this.newPassword).subscribe();
}
}
