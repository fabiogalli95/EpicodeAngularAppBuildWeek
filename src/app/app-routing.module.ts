import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormRoutingModule } from './auth/form-routing.module';
const routes:Routes =[];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
