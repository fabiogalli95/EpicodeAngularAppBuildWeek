import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Register } from 'src/app/models/register.interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
formSub!:FormGroup;
  router: any;
constructor(private fb:FormBuilder, private srvAuth : AuthService){}
ngOnInit(): void {
  this.formSub = this.fb.group({
    username:['',[Validators.required,Validators.minLength(3)]],
    surname:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    password: ['', [Validators.required/*, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/) */]],
    passwordConfirm: ['', [Validators.required]], 
   
  }, { validators: this.passwordMatchValidator });
}
passwordMatchValidator(g: FormGroup) {
  const password = g.get('password');
  const passwordConfirm = g.get('passwordConfirm');
  
  if (password && passwordConfirm) {
    return password.value === passwordConfirm.value ? null : { 'mismatch': true };
  }
  return null;
}
submit(){
  this.formSub.removeControl('passwordConfirm');
  this.formSub.value.user = []
  this.formSub.value.user.push(this.formSub.value.username,this.formSub.value.surname)
  console.log(this.formSub.value);
  
  const user:Partial<Register>=this.formSub.value;

  this.srvAuth.register(user).subscribe((elem)=>{
  /*   let data={email:this.formSub.value.email,password:this.formSub.value.password}
   this.srvAuth.login(data)
    console.log(elem); */
  })
}
controllo(val: string) {  
  return this.formSub.get(val);
}
}
