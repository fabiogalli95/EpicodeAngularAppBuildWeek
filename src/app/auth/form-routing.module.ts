import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from '../components/home/home.component';


const routes:Routes =[
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },

  {
    path: 'home',
    component:HomeComponent
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class FormRoutingModule { }
