import { Pipe, PipeTransform } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import memo from 'memo-decorator';
import { Observable, of } from 'rxjs';
import { AdminService } from 'src/app/admin/admin.service';
import { SilingCoreService } from 'src/app/core/core.service';


@Pipe({
  name: 'filterLabelDisplay',
  pure: true
})
export class FilterLabelDisplayPipe implements PipeTransform {

  @memo()
  transform(value: string): string {
    let result = value;
    switch (value) {
      case 'company': {
        result = 'Select a Siling Ins.';
        break;
      }
      case 'date': {
        result = 'Select a entry date';
        break;
      }
      case 'gain':
      case 'loss': {
        result = 'Enter $ amount';
        break;
      }
      case 'balance': {
        result = 'Enter $ amount';
        break;
      }
    }
    return result;
  }
}


@Pipe({
  name: 'filterValueSelections',
  pure: true
})
export class FilterValueSelectionsPipe implements PipeTransform {

  constructor(private cs: SilingCoreService, private as: AdminService) {
  }

  @memo()
  transform(value: string): Observable<any[]> {
    let result: Observable<any[]> = of([]);
    switch (value) {
      case 'company': {
        result = this.as.getSilingCompanies$
        break;
      }
    }
    return result;
  }
}


@Pipe({
  name: 'formArrayValueIndexByControlName',
  pure: true
})
export class FormArrayValueAtIndexByControlPipe implements PipeTransform {

  transform(fa: FormArray, index: number, controlName: string): any {
    if (fa && controlName) {
      return (fa.at(index).get(controlName) as FormGroup).value;
    }
    return undefined;
  }
}
