import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { customRequiredValidator } from 'src/app/shared/form-validators/general-form.validator';
import * as fromFormUtils from '../../../shared/general.utils';


@Component({
  selector: 'app-settings-new-siling-dialog',
  templateUrl: 'new-siling-dialog.component.html',
  styleUrls: ['./new-siling-dialog.component.scss']
})
export class NewSilingDialogComponent implements OnInit {

  entryFg: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<NewSilingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.entryFg = this.fb.group({
        name: fromFormUtils.createFormControl2(null, false, [Validators.required, customRequiredValidator]),
        dateAdded: fromFormUtils.createFormControl2(new Date(), true)
      });
  }

  ngOnInit() {

  }

  onCancel() {
    this.dialogRef.close();
  }

  onSave() {
    if (this.entryFg.valid) {
      this.dialogRef.close(this.entryFg.getRawValue());
    }
  }

  resetNameValue() {
    this.entryFg.get('name')?.reset();
  }
}
