import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { AboutPageModule } from '../about/about.module';
import { HomePageModule } from '../home/home.module';
import {AttendanceModule} from '../attendance/attendance.module';
import {CoreModule} from '../core/core.module';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      SharedModule,
      AttendanceModule,
      CoreModule,
      AuthModule,
      TabsPageRoutingModule,
      HomePageModule,
      AboutPageModule,
      ContactPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
