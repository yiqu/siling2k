export interface SilingDashboardUiState {
  allTabSelections: DashboardTab[];
  currentSelection?: DashboardTab;
}

export interface DashboardTab {
  id: string;
  display: string;
  index: number;
  tabIcon: string;
}

