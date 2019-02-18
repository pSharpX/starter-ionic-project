import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRouteGuard } from './auth-route.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthRouteGuard]
})
export class AuthModule { }
