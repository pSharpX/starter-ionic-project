import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateMoment'
})
export class DateMomentPipe implements PipeTransform {

  transform(date: string, args?: any): any {
    return moment(date).fromNow();
  }

}
