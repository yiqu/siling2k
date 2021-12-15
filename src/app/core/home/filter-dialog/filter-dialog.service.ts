import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FilterDialogComponent } from './filter-dialog.component';
import { FilterDialogInput } from './filter.model';

@Injectable({
  providedIn: 'root'
})
export class FilterDialogService {

  private dialogRef: MatDialogRef<FilterDialogComponent> | undefined = undefined;

  constructor(private dialog: MatDialog) {
  }


  public getDialog(filterData?: FilterDialogInput): MatDialogRef<FilterDialogComponent, any> {
    this.dialogRef = undefined;
    this.dialogRef = this.dialog.open(FilterDialogComponent, {
      data: filterData,
      panelClass: 'filter-dialog-container',
      hasBackdrop: true,
      autoFocus: false,
      disableClose: true,
      width: 'calc(100% - 30rem)',
    });

    return this.dialogRef;
  }

}
