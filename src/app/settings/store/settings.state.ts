import { SilingCompany } from "src/app/admin/store/admin.state";

export interface SettingsState {
  showHideLists: ShowHideCompanyList
  showHideLoading: boolean;
}

export interface ShowHideList {
  showing: string[];
  hiding: string[];
}

export interface ShowHideCompanyList {
  showing: SilingCompany[];
  hiding: SilingCompany[];
}
