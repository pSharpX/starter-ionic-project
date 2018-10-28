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

@NgModule({
  imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      AttendanceModule,
      CoreModule,
      TabsPageRoutingModule,
      HomePageModule,
      AboutPageModule,
      ContactPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
