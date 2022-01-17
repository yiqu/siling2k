import { Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EMPTY, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, pluck, switchMap, takeUntil, tap } from 'rxjs/operators';
import { SilingCompany } from 'src/app/admin/store/admin.state';
import { FormControlType, SilingEntry, SilingEntryStruct } from 'src/app/models/general.models';
import { KeyEvent } from 'src/app/shared/directives/enter-escape.directive.ts/enter-escape.directive';
import { customNumberWithOptionalCommaAndSingleDecimal, customOnlyNumbersAndDecimalsValidator } from 'src/app/shared/form-validators/general-form.validator';
import * as fromFormUtils from '../../../shared/general.utils';

const ENTRY_SELECT_TYPE = ['company'];
const ENTRY_DATE_TYPE = ['date'];
const CHECK_TYPE = ['updateDate'];

@Component({
  selector: 'new-siling1k-entry-dialog',
  templateUrl: 'new-entry-dialog.component.html',
  styleUrls: ['./new-entry-dialog.component.scss']
})
export class NewEntryDialogComponent implements OnInit, OnDestroy {

  entryFormGroup: FormGroup;
  entryFormGroupStruct: SilingEntryStruct[] = [];
  currentFocusControl: string | undefined;
  editMode: boolean = false;
  compDest$: Subject<void> = new Subject<void>();

  get amountControl(): FormControl {
    return <FormControl>this.entryFormGroup.get('amount');
  }

  constructor(public dialogRef: MatDialogRef<NewEntryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SilingEntry, private fb: FormBuilder) {
      this.entryFormGroup = this.fb.group(this.createFormGroup(data));

      if (this.data && (this.data.amount !== undefined) && this.data.company) {
        this.editMode = true;
      }
  }

  ngOnInit() {
    this.entryFormGroupStruct = [];
    this.updateFormGroupStruct('amount', true);

    this.entryFormGroup.valueChanges.pipe(
      takeUntil(this.compDest$),
      pluck('amount'),
    ).subscribe((res) => {
      if (res) {
        const amountRes = res + '';
        this.amountControl.setValue(amountRes.trim(), {emitEvent: false});
      }
    });

    this.amountControl.valueChanges.pipe(
      takeUntil(this.compDest$),
      filter((amount) => {
        return (amount && (amount + '').trim() !== '');
      }),
      map((amountValue: string) => {
        if (!this.entryFormGroup.get('company')) {
          this.entryFormGroup.addControl('company', fromFormUtils.createFormControl2(undefined, false,
            [Validators.required]), {emitEvent: false});
          this.updateFormGroupStruct('company', true);
        }

        if (!this.entryFormGroup.get('updateDate')) {
          this.entryFormGroup.addControl('updateDate', fromFormUtils.createFormControl2(false, false), {emitEvent: false});
          this.updateFormGroupStruct('updateDate', true);
        }
        return this.entryFormGroup.get('updateDate')! as FormControl;
      }),
      switchMap((co) => {
        return this.data.companies.pipe(
          filter((allCompanies) => {
            return allCompanies && allCompanies.length > 0;
          }),
          map((companies: SilingCompany[]) => {
            const index: number = companies.findIndex((company: SilingCompany) => {
              if (this.data.company) {
                return this.data.company.toUpperCase() === company.name.toUpperCase();
              }
              return false;
            });
            const companiesAndSelection: [FormControl, SilingCompany] = [this.entryFormGroup.get('company')! as FormControl,
              companies[index]];
            return companiesAndSelection;
          }),
          switchMap((companiesAndSelection: [FormControl, SilingCompany]) => {
            if (companiesAndSelection) {
              if (this.editMode) {
                this.entryFormGroup.get('company')?.setValue(companiesAndSelection[1]);
              }
              return this.entryFormGroup.get('updateDate')!.valueChanges.pipe(
                takeUntil(this.compDest$),
                tap((res: boolean) => {
                  if (res) {
                    if (!this.entryFormGroup.get('date')) {
                      const dateToUse: Date = this.data.date ? new Date(this.data.date) : new Date();
                      this.entryFormGroup.addControl('date', fromFormUtils.createFormControl2(dateToUse, false,
                        [Validators.required]));
                      this.updateFormGroupStruct('date', true);
                    }
                  } else {
                    this.entryFormGroup.removeControl('date', {emitEvent: false});
                    this.updateFormGroupStruct('date', false);
                  }
                })
              );
            }
            return EMPTY;
          })
        );
      }),
    ).subscribe();

    if (this.editMode) {
      this.fillForEdit(this.data);
    }
  }

  createFormGroup(data: SilingEntry): {[key: string]: FormControl} {
    return {
      amount: fromFormUtils.createFormControl2(undefined, false, [customNumberWithOptionalCommaAndSingleDecimal])
    }
  }

  fillForEdit(formData: SilingEntry) {
    this.amountControl.setValue(formData.amount);
  }

  updateFormGroupStruct(ctrlName: string, toAdd: boolean): void {
    if (toAdd) {
      let inputType = FormControlType.TEXT_INPUT;
      if (ENTRY_SELECT_TYPE.indexOf(ctrlName) > -1) {
        inputType = FormControlType.SELECT_INPUT;
      } else if (ENTRY_DATE_TYPE.indexOf(ctrlName) > -1) {
        inputType = FormControlType.DATE_INPUT;
      } else if (CHECK_TYPE.indexOf(ctrlName) > -1) {
        inputType = FormControlType.CHECK_INPUT;
      }
      this.entryFormGroupStruct.push({
        controlName: ctrlName,
        inputType: inputType,
        value: this.data[ctrlName as keyof SilingEntry]
      });
    } else {
      const indexToRemove = this.entryFormGroupStruct.findIndex((res) => {
        return res.controlName === ctrlName;
      });
      this.entryFormGroupStruct.splice(indexToRemove, 1);
    }
  }

  onFocus(controlName: string) {
    this.currentFocusControl = controlName;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave() {
    let rawValue = this.entryFormGroup.getRawValue();
    if (rawValue.updateDate === false || !rawValue.date) {
      let dateValue: Date | undefined = new Date();
      if (this.editMode && this.data.date) {
        dateValue = new Date(this.data.date);
      }
      rawValue = {
        ...rawValue,
        date: dateValue
      }
    }
    this.dialogRef.close(rawValue);
  }

  onKeyEventt(event: KeyboardEvent) {
    if (event.key === KeyEvent.ENTER && this.entryFormGroup.valid) {
      this.onSave();
    }
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
