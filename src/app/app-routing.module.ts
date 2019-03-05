import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRouteGuard } from './auth/auth-route.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tabs/tabs.module#TabsPageModule',
    canActivate: [AuthRouteGuard]
  },
  {
    path: 'report',
    loadChildren: './report/report.module#ReportPageModule',
    canActivate: [AuthRouteGuard]
  },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
