import { Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { FormControlType, SilingEntry, SilingEntryStruct } from 'src/app/models/general.models';
import * as fromFormUtils from '../../shared/general.utils';

const ENTRY_SELECT_TYPE = ['company'];
const formGroupControlOmit = ['companyLoading', 'companies'];

@Component({
  selector: 'new-siling1k-entry-dialog',
  templateUrl: 'new-entry-dialog.component.html',
  styleUrls: ['./new-entry-dialog.component.scss']
})
export class NewEntryDialogComponent implements OnInit, OnDestroy {

  entryFg: FormGroup;
  entryFgStruct: SilingEntryStruct[] = [];
  currentFocusControl: string | undefined;
  compDest$: Subject<void> = new Subject<void>();


  constructor(public dialogRef: MatDialogRef<NewEntryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SilingEntry, private fb: FormBuilder) {
      this.entryFg = this.fb.group(this.createFormGroupObj(data));
      this.entryFgStruct = this.createFgStructure(data);
      console.log(this.data, this.entryFgStruct)
  }

  ngOnInit() {
    this.entryFg.valueChanges.subscribe((res) => {
      console.log(this.entryFg.getRawValue());
    });

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
      if (formGroupControlOmit.indexOf(key) < 0) {
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
    }
    return struc;
  }

  onFocus(controlName: string) {
    this.currentFocusControl = controlName;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave() {
    this.dialogRef.close(this.entryFg.getRawValue());
  }

  ngOnDestroy() {

  }


}
