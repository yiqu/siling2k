import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, DialogPosition } from '@angular/material/dialog';
import { SilingEntry } from 'src/app/models/general.models';
import { NewEntryDialogComponent } from './new-entry-dialog.component';

@Injectable()
export class NewEntryDialogService {

  private dialogRef: MatDialogRef<NewEntryDialogComponent> | undefined = undefined;

  constructor(private dialog: MatDialog) {

  }


  public openDialog(info: SilingEntry): void {
    this.dialogRef = this.dialog.open(NewEntryDialogComponent, {
      data: {
        ...info
      },
      panelClass: 'new-siling1k-entry',
      hasBackdrop: true,
      autoFocus: true,
      disableClose: true,
    });
  }

}
