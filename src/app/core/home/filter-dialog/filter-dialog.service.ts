import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FilterDialogComponent } from './filter-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class FilterDialogService {

  private dialogRef: MatDialogRef<FilterDialogComponent> | undefined = undefined;

  constructor(private dialog: MatDialog) {
  }


  public getDialog(filterData: any) {
    this.dialogRef = undefined;
    this.dialogRef = this.dialog.open(FilterDialogComponent, {
      data: filterData,
      panelClass: 'filter-dialog-container',
      hasBackdrop: true,
      autoFocus: false,
      disableClose: true,
      width: 'calc(100% - 10rem)',
      height: 'calc(100% - 15rem)',
    });

    return this.dialogRef;
  }

}
