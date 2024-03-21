import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'landing-page', component: LandingPageComponent},
  { path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
