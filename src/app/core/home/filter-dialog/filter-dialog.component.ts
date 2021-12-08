import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-core-filter-dialog',
  templateUrl: 'filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  onClose(hasData: boolean) {
    if (hasData) {
      this.dialogRef.close();
    } else {
      this.dialogRef.close(undefined);
    }
  }
}
