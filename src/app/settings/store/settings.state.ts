import { SilingCompany } from "src/app/admin/store/admin.state";

export interface SettingsState {
  showHideLists: ShowHideCompanyList
  showHideLoading: boolean;
  err?: boolean;
  errMsg?: string;
}

export interface ShowHideList {
  showing: string[];
  hiding: string[];
}

export interface ShowHideCompanyList {
  showing: SilingCompany[];
  hiding: SilingCompany[];
}
