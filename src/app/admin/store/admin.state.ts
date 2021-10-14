export interface AdminState {
  companies: SilingCompany[];
  apiLoading: boolean;
  apiError: boolean;
  apiErrMsg?: string;
}

export interface SilingCompany {
  id: string;
  name: string;
  dateAdded: number;
}
