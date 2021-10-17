import { Observable } from "rxjs";
import { SilingCompany } from "../admin/store/admin.state";

export interface SilingEntry {
  company?: string;
  amount?: number;
  date: number;
  companies: Observable<SilingCompany[]>;
  companyLoading: Observable<boolean>;
}

export enum FormControlType {
  TEXT_INPUT = "TEXT_INPUT",
  SELECT_INPUT = "SELECT_INPUT",
  DATE_INPUT = "DATE_INPUT"
}

export interface SilingEntryStruct {
  controlName: string;
  value: any;
  inputType: FormControlType
}

export interface SilingData {
  id?: string;
  amount: number;
  company: string;
  date: number;
}

export interface SilingEntryDialogData {
  amount: number;
  company: SilingCompany;
  date: Date;
}