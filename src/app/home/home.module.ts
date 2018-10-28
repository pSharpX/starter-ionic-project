import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {AttendanceModule} from '../attendance/attendance.module';
import {CoreModule} from '../core/core.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: HomePage }]),
        AttendanceModule,
        CoreModule,
    ],
    declarations: [HomePage]
})
export class HomePageModule {}
