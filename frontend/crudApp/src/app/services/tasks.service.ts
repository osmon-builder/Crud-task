import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Task } from '../interface/Task.model';
import {Router} from '@angular/router';
import { Token } from '@angular/compiler';




@Injectable({
  providedIn: 'root'
})
export class TasksService {

  headers = new HttpHeaders();

  constructor( 
    private http : HttpClient,
    private router: Router,
    ) {
      let headers = new HttpHeaders().set('Content-type', 'application/json')
          .set('x-access-token', `${localStorage.getItem('token')}`);
          
      this.headers = headers;

    }


  getTasks(){
    return this.http.get(`${environment.BaseUrl}/tasks`, {headers: this.headers});
  }


  addTask(task: any){
    return this.http.post(`${environment.BaseUrl}/tasks/new-task`, task, {headers: this.headers});
  }

  deleteTask(id: string){
    return this.http.delete(`${environment.BaseUrl}/tasks/delete/${id}`, {headers: this.headers});
  }
  
  updateTask(id: string){
    console.log(this.headers)
    return this.http.put(`${environment.BaseUrl}/tasks/edit/${id}`, {headers: this.headers});

  }


  loggedIn(): Boolean{
    return !!localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/singin']);
  }
}
