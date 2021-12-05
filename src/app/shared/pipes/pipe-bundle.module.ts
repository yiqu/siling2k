import { NgModule } from '@angular/core';
import { CountNumberDisplayPipe } from './count-display.pipe';
import { PluralDisplayPipe } from './plural.pipe';
import { DateDisplayPipe, TimeFromNowPipe } from './time-utils.pipe';
import { UserDisplayPipe } from './user.pipe';
import { CapitalizeFirstLetterPipe } from './letters.pipe';
import { TableColumnDisplayPipe, TableDataDisplayPipe } from './table.pipe';
import { SilingCompanyDisplay, SilingEntryTooltipDisplay } from './tooltip.pipe';
import { ProfitPercentPipe, LocaleNumberPipe, RoundNumberPipe, ProfitPipe, ProfitGainClassPipe, ProfileGainBgColorPipe, ProfitPercentIconClassPipe } from './numbers.pipe';

@NgModule({
  imports: [],

  exports: [
    PluralDisplayPipe,
    CountNumberDisplayPipe,
    DateDisplayPipe,
    UserDisplayPipe,
    CapitalizeFirstLetterPipe,
    TableColumnDisplayPipe,
    TableDataDisplayPipe,
    SilingEntryTooltipDisplay,
    SilingCompanyDisplay,
    ProfitPercentPipe,
    LocaleNumberPipe,
    RoundNumberPipe,
    ProfitPipe,
    ProfitGainClassPipe,
    TimeFromNowPipe,
    ProfileGainBgColorPipe,
    ProfitPercentIconClassPipe
  ],

  declarations: [
    PluralDisplayPipe,
    CountNumberDisplayPipe,
    DateDisplayPipe,
    UserDisplayPipe,
    CapitalizeFirstLetterPipe,
    TableColumnDisplayPipe,
    TableDataDisplayPipe,
    SilingEntryTooltipDisplay,
    SilingCompanyDisplay,
    ProfitPercentPipe,
    LocaleNumberPipe,
    RoundNumberPipe,
    ProfitPipe,
    ProfitGainClassPipe,
    TimeFromNowPipe,
    ProfileGainBgColorPipe,
    ProfitPercentIconClassPipe
  ],

  providers: [
    DateDisplayPipe,
    RoundNumberPipe,
    LocaleNumberPipe
  ],
})
export class PipeBundleModule { }
