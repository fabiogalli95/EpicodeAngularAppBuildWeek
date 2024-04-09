import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm!: FormGroup;
@Output() log = new EventEmitter<string>();
constructor(private authSrv:AuthService, private router:Router) { }
ngOnInit(): void {
  

  this.loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

}

onSubmit() {
this.authSrv.login(this.loginForm.value).subscribe(
 /* (data)=> {this.router.navigate(['/'])} */
(data)=>{
  this.log.emit('true')}
)

}

}
