import { SilingData } from "src/app/models/general.models";

export interface SilingDashboardState {
  entrySaveLoading: boolean;
  entryApiErr: boolean;
  entryApiErrMsg?: string;
  entryToSave?: SilingData;
}

export interface FirebaseDocObsAndId {
  operationObs: Promise<void>;
  id: string;
}
