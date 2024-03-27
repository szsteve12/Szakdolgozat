import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameCallsService {
  private beURL = 'http://localhost:3000';

  constructor(
		private http: HttpClient,
    
	) {}
  

  getCurrentUser(): Observable<any> {
    console.log("Get Current User")
    const URL = `${this.beURL}/currentUser`
    return this.http.get(URL);
  }

  getOtherUser(): Observable<any> {
    console.log("Get Other User")
    const URL = `${this.beURL}/otherUser`
    return this.http.get(URL);
  }

}
