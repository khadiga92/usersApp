import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://jsonplaceholder.typicode.com/users/'
  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get<Users[]>(this.url)
  }
  getSingleuser(id:string){
    return this.http.get(this.url + id)
  }

  addUsers(user:Users){
    return this.http.post(this.url,user)
  }

  deleteUsers(id:any){
    return this.http.delete(this.url + id)
  }

  editUsers(id:any,body:Users){
    return this.http.patch(this.url + id, body)
  }

}
