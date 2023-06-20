import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overview'
})
export class OverviewPipe implements PipeTransform {

  transform(overview:string,limit:number): string {
    return overview.split(' ').slice(0,limit).join(' ');
  }

}
