import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateMomentDirective } from './directives/date-moment.directive';
import { DateMomentPipe } from './pipes/date-moment.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [DateMomentDirective, DateMomentPipe],
  exports: [DateMomentDirective, DateMomentPipe]
})
export class SharedModule {}
