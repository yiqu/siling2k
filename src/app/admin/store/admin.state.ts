export interface AdminState {
  companies: SilingCompany[];
  apiLoading: boolean;
  apiError: boolean;
  apiErrMsg?: string;
  companyBeingAdded?: SilingCompany;
}

export interface SilingCompany {
  id: string;
  name: string;
  dateAdded: number;
  hidden?: boolean;
}
