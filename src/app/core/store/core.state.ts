import { SilingData } from "src/app/models/general.models";

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
}

export interface FirebaseDocObsAndId {
  operationObs: Promise<void>;
  id: string;
}

export interface SilingDataCollection {
  [key: string]: SilingData[]
}
