import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { KeyEvent } from 'src/app/shared/directives/enter-escape.directive.ts/enter-escape.directive';
import { numbersOnlyValidator } from 'src/app/shared/form-validators/general-form.validator';
import { AllValidationErrors, calculateNestedFormErrors, createFormControl, createFormControl2 } from 'src/app/shared/general.utils';
import { DialogFilterOption, FilterDialogInput, Type } from './filter.model';

@Component({
  selector: 'app-core-filter-dialog',
  templateUrl: 'filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent implements OnInit, OnDestroy {

  filterFg: FormGroup;
  isLoading$?: Observable<boolean>;
  allErrors: AllValidationErrors[] = [];
  compDest$: Subject<void> = new Subject<void>();

  get filterArray(): FormArray {
    return <FormArray> this.filterFg.get('filters');
  }

  constructor(public dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FilterDialogInput, private fb: FormBuilder) {
      this.filterFg = this.fb.group({
        filters: this.fb.array([])
      });

      if (this.data.filterData.length > 0) {

      } else {
        const fg = this.createDefaultFilter();
        this.filterArray.push(fg);
      }
      this.filterFg.valueChanges.pipe(
        takeUntil(this.compDest$)
      ).subscribe((res) => {
        this.allErrors = calculateNestedFormErrors(this.filterFg);
      })
  }

  ngOnInit() {
    if (this.data?.companiesLoading && this.data?.silingDataLoading) {
      this.isLoading$ = combineLatest([this.data.companiesLoading, this.data.silingDataLoading]).pipe(
        map((res: [boolean, boolean]) => {
          return res[0] || res[1];
        })
      );
    }
  }

  onFilterTypeChange(index: number) {
    if (index > -1) {
      const filterValueFg: FormControl = this.filterArray.at(index)?.get('filterValue') as FormControl;

      if (filterValueFg) {
        filterValueFg?.reset(undefined, {emitEvent: false});
        const selection: string = (this.filterArray.at(index)?.get('filterType') as FormControl).value;

        switch (selection) {
          case 'gain':
          case 'loss':
          case 'balance': {
            (filterValueFg as any).setValidators([Validators.required, numbersOnlyValidator]);
            break;
          }
          case 'company': {
            (filterValueFg as any).setValidators([Validators.required]);
            break;
          }
          case 'date': {
            (filterValueFg as FormControl).clearValidators();
            break;
          }
        }
        (filterValueFg as FormControl).updateValueAndValidity();
      }
    }
  }

  createDefaultFilter(value?: DialogFilterOption): FormGroup {
    return this.fb.group({
      filterType: createFormControl2(value?.valueType, false),
      filterValue : createFormControl2(value?.currentValue, false, [Validators.required]),
    })
  }

  onAddNew() {
    if (this.filterFg.valid) {
      this.filterArray.push(this.createDefaultFilter());
    }
  }

  onRemoveAll() {
    this.filterArray.clear();
    this.onClose(true);
  }

  onClose(hasData: boolean) {
    this.dialogRef.close(hasData ? this.filterFg.value : undefined);
  }

  onKeyEvent(event: KeyEvent) {
    if (event === KeyEvent.ESCAPE) {
      this.onClose(false);
    }
  }

  ngOnDestroy(): void {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
