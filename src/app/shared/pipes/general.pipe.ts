import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'createdToCssClass',
  pure: true
})
export class CreatedStatusToCssClassPipe implements PipeTransform {

  @memo()
  transform(value: boolean | undefined): any {
    return value ? "" : "loading-bg";
  }
}


@Pipe({
  name: 'getValueCountDisplay',
  pure: true
})
export class ValueCountPipe implements PipeTransform {

  transform(value: string): number {
    if (value) {
      let v = value+"";
      return v.trim().length;
    }
    return 0;
  }
}
