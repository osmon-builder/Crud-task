import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../interface/User.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  


  constructor( 
    private http: HttpClient,
    private router: Router

    ) { }

  signUp(user: User){
    return this.http.post(`${environment.BaseUrl}/users/signup`, user);
  }

  signIn(user: User){
    return this.http.post(`${environment.BaseUrl}/users/signin`, user);
  }

  loggedIn(): Boolean{
    return !!localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/singin']);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
