import { SilingData, SilingDataDetail } from "src/app/models/general.models";

export interface SilingDashboardState {
  entrySaveLoading: boolean;
  entryApiErr: boolean;
  entryApiErrMsg?: string;
  entryToSave?: SilingData;

  silingDataBeingFetchedNames: string[];
  silingDataLoading: boolean;
  silingDataErr: boolean;
  silingDataErrMsg?: string;
  silingData?: SilingDataCollection;
  firstTimeLoading: boolean;
}

export interface FirebaseDocObsAndId {
  operationObs: Promise<void>;
  id: string;
}

export interface SilingDataCollection {
  [key: string]: SilingData[]
}

export interface SilingDataDetailCollection {
  [key: string]: SilingDataDetail[]
}

export interface SilingDashboardData {
  keys: string[];
  data: SilingDataDetailCollection;
  flexNumber: number;
}

export interface SummaryData {
  sumAmount: {[key: string]: number};
  lastUpdated: number;
  total: number;
}
