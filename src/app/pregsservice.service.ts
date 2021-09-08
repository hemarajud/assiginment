import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http:HttpClient) { }
  createUser(user:any){
    console.log('users', user)
    return this.http.post("http://localhost:3000/posts",user)
  }
  getAllUser(){
    return this.http.get("http://localhost:3000/posts");
  }
}
