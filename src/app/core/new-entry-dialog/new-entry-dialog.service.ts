import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NewEntryDialogComponent } from './new-entry-dialog.component';

@Injectable()
export class NewEntryDialogService {

  private dialogRef: MatDialogRef<NewEntryDialogComponent> | undefined = undefined;

  constructor(private dialog: MatDialog) {

  }


  public openDialog(): void {
    this.dialogRef = this.dialog.open(NewEntryDialogComponent, {
      data: {
      },
      panelClass: 'new-siling1k-entry',
      hasBackdrop: true,
      autoFocus: true,
      disableClose: true
    });
  }

}
