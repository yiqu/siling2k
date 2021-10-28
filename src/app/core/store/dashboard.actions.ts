import { createAction, props } from '@ngrx/store';
import { SilingData } from 'src/app/models/general.models';

const SET_SILING_IDS_TO_HIDE: string = "[Siling/Dashboard] Set siling ids to hide";


export const setSilingIdsToHide = createAction(
  SET_SILING_IDS_TO_HIDE,
  props<{ids: string[]}>()
)
