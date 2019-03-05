import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmplifyAngularModule, AmplifyIonicModule, AmplifyService } from 'aws-amplify-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthRouteGuard } from './auth-route.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AmplifyAngularModule,
    AmplifyIonicModule
  ],
  declarations: [LoginComponent],
  providers: [AuthRouteGuard]
})
export class AuthModule { }
