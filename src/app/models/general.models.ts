import { SilingCompany } from "../admin/store/admin.state";

export interface SilingEntry {
  company?: string;
  amount?: number;
  date: number;
  companyOptions: SilingCompany[]
}

export enum FormControlType {
  TEXT_INPUT = "TEXT_INPUT",
  SELECT_INPUT = "SELECT_INPUT"
}

export interface SilingEntryStruct {
  controlName: string;
  value: any;
  inputType: FormControlType
}
