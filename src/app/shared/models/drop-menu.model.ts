import { SilingDataDetail, SilingEntry } from "src/app/models/general.models";

export interface MenuOption {
  id: string;
  display: string;
  icon?: string;
  disabled?: boolean;
}

export interface SilingEntryOption {
  option: MenuOption;
  entry?: SilingDataDetail;
}
