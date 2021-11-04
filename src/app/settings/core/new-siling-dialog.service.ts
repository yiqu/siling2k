import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, DialogPosition } from '@angular/material/dialog';
import { SilingCompany } from 'src/app/admin/store/admin.state';
import { SilingEntry } from 'src/app/models/general.models';
import { NewSilingDialogComponent } from './new-siling-dialog/new-siling-dialog.component';

@Injectable()
export class NewSilingInsDialogService {

  private dialogRef: MatDialogRef<NewSilingDialogComponent> | undefined = undefined;

  constructor(private dialog: MatDialog) {
  }


  public getDialog(info: any): MatDialogRef<NewSilingDialogComponent> {
    this.dialogRef = undefined;
    this.dialogRef = this.dialog.open(NewSilingDialogComponent, {
      data: {
      },
      panelClass: 'new-siling1k-ins',
      hasBackdrop: true,
      autoFocus: true,
      disableClose: true,
    });

    return this.dialogRef;
  }

}
