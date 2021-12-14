import { Observable } from "rxjs";
import { SilingCompany } from "src/app/admin/store/admin.state";

export interface FilterDialogInput {
  companiesLoading: Observable<boolean>;
  silingDataLoading: Observable<boolean>;
  filterData: DialogFilterOption[];
  options: string[];
}

export interface DialogFilterOption {
  valueType: string;
  currentValue?: any;
}

export enum FilterType {
  SELECT = 'select',
  INPUT = 'input',
  DATE = 'date'
}

export enum Type {
  OBJECT = 'object',
  PRIM = 'prim'
}
