import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Authdata } from './authdata.interface';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl=environment.apiUrl 
  private authSub =new BehaviorSubject<Authdata|null>(null)
  /* jwtToken = new JwtHelperService(); */
  constructor(private http:HttpClient) { }
  login(data:{email:string ; password:string;}){
    console.log(data);
    
   return this.http.post<Authdata>(`${this.apiUrl}login`,data)
    .pipe(tap((data)=>{
      
      this.authSub.next(data)
      console.log(JSON.stringify(data));
      localStorage.setItem('user', JSON.stringify(data))
    }))
  }
}
