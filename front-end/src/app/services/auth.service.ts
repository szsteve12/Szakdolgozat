import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private beURL = 'http://localhost:3000';

  constructor(
		private http: HttpClient,
    
	) {}
  

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.beURL}/login/password`, { username, password });
  }

}
