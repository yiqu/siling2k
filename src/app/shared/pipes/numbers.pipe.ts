import { Pipe, PipeTransform } from "@angular/core";
import memo from 'memo-decorator';

@Pipe({
  name: 'roundNumberDisplay',
  pure: true
})
export class RoundNumberPipe implements PipeTransform {

  transform(value: any, decimal: number): string {
    let valInNum = +value;
    return valInNum.toFixed(decimal);
  }
}

@Pipe({
  name: 'localeNumberDisplay',
  pure: true
})
export class LocaleNumberPipe implements PipeTransform {

  @memo()
  transform(value: number): string {
    return (+value).toLocaleString(undefined, {minimumFractionDigits: 2});
  }
}

@Pipe({
  name: 'profitPercent',
  pure: true
})
export class ProfitPercentPipe implements PipeTransform {

  constructor(private rnp: RoundNumberPipe) {
  }

  @memo()
  transform(value: number): string {
    let result;
    let percent: number = (value * 100);
    if (isNaN(percent)) {
      return "N/A";
    } else if (percent < 0) {
      result = this.rnp.transform(percent, 1) + "%";
    } else {
      result = "+" + this.rnp.transform(percent, 1) + "%";
    }
    return result;
  }
}

@Pipe({
  name: 'profit',
  pure: true
})
export class ProfitPipe implements PipeTransform {

  constructor(private lp: LocaleNumberPipe) {
  }

  @memo()
  transform(value: number): string {
    let result;
    if (isNaN(value)) {
      return "N/A";
    }
    else if (value === 0) {
      result = "No Change"
    }
    else if (value > 0) {
      result = "+$" + this.lp.transform(value);
    }
    else {
      result = "-$" + this.lp.transform(Math.abs(value));
    }
    return result;
  }
}


@Pipe({
  name: 'numberGainClass',
  pure: true
})
export class NumberGainClassPipe implements PipeTransform {

  @memo()
  transform(value: any): string {
    const num = +value;
    if (num > 0) {
      return 'positive';
    }
    return 'negative';
  }
}
