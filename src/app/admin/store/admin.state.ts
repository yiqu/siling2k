export interface AdminState {
  companies: SilingCompany[];
  apiLoading: boolean;
  apiError: boolean;
  apiErrMsg?: string;
  companyBeingAdded?: SilingCompany;
  showHideData?: ShowHideData;
}

export interface SilingCompany {
  id: string;
  name: string;
  dateAdded: number;
  hidden?: boolean;
}

export interface ShowHideData {
  hiding: SilingCompany[];
  showing: SilingCompany[];
}
