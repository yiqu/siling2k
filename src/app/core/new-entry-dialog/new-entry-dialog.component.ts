import { Component, Inject} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControlType, SilingEntry, SilingEntryStruct } from 'src/app/models/general.models';
import * as fromFormUtils from '../../shared/general.utils';

const ENTRY_SELECT_TYPE = ['company'];

@Component({
  selector: 'new-siling1k-entry-dialog',
  templateUrl: 'new-entry-dialog.component.html',
  styleUrls: ['./new-entry-dialog.component.scss']
})
export class NewEntryDialogComponent {

  entryFg: FormGroup;
  entryFgStruct: SilingEntryStruct[] = [];
  currentFocusControl: string | undefined;


  constructor(@Inject(MAT_DIALOG_DATA) public data: SilingEntry, private fb: FormBuilder) {
    this.entryFg = this.fb.group(this.createFormGroupObj(data));
    this.entryFgStruct = this.createFgStructure(data);
    console.log(this.entryFg, this.entryFgStruct)
  }

  createFormGroupObj(data: SilingEntry): {[key: string]: FormControl} {
    return {
      company: fromFormUtils.createFormControl2(data?.company, false),
      date: fromFormUtils.createFormControl2(data?.date, false),
      amount: fromFormUtils.createFormControl2(data?.amount, false)
    }
  }

  createFgStructure(data: SilingEntry): SilingEntryStruct[] {
    const struc = [];
    let keys: string[] = Object.keys(data);
    if (keys.length < 1) {
      keys = ['company', 'date', 'amount'];
    }
    for (const key of keys) {
      let inputType = FormControlType.TEXT_INPUT;
      if (ENTRY_SELECT_TYPE.indexOf(key) > -1) {
        inputType = FormControlType.SELECT_INPUT;
      }

      struc.push({
        controlName: key,
        inputType: inputType,
        value: data[key as keyof SilingEntry]
      });
    }
    return struc;
  }

  onFocus(controlName: string) {
    this.currentFocusControl = controlName;
  }


}
