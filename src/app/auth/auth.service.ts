import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Authdata } from './authdata.interface';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Register } from '../models/register.interface';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl=environment.apiUrl 
  private authSub =new BehaviorSubject<Authdata|null>(null)

  user$ = this.authSub.asObservable()


  /* jwtToken = new JwtHelperService(); */



  constructor(private http:HttpClient, private router:Router) { }
  login(data:{email:string ; password:string;}){
    console.log(data);
    
   return this.http.post<Authdata>(`${this.apiUrl}login`,data)
    .pipe(tap((data)=>{
      
      this.authSub.next(data)
      console.log(JSON.stringify(data));
      localStorage.setItem('user', JSON.stringify(data))
    }))
  }
/* iniToken(){
  const user=localStorage.getItem('user');
  if(user){

  }
} */
logout() {
  this.authSub.next(null);
  localStorage.removeItem('user');
  this.router.navigate(['']);
}

  register(data:Partial<Register>) {
    console.log(data);
    
   return this.http.post(`${this.apiUrl}register`, data)
  }

}
