import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { AttendanceModule } from '../attendance/attendance.module';
import {
  AmplifyAngularModule,
  AmplifyIonicModule,
  AmplifyService
} from 'aws-amplify-angular';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
    AttendanceModule,
    AmplifyAngularModule,
    AmplifyIonicModule,
    CoreModule
  ],
  declarations: [HomePage],
  providers: [AmplifyService]
})
export class HomePageModule {}
