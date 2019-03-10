import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateMomentDirective } from './directives/date-moment.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DateMomentDirective],
  exports: [DateMomentDirective]
})
export class SharedModule {}
