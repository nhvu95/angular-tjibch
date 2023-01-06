import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-datepicker-sample-1',
  styleUrls: ['./datepicker-sample-1.component.scss'],
  templateUrl: './datepicker-sample-1.component.html',
})
export class DatepickerSample1Component {
  public date = new Date();

  formatter1 = (date: Date) => {
    return this.dateToLocalLanguageString('da-DK', date);
  };

  formatter2(date: Date) {
    return this.dateToLocalLanguageString('da-DK', date);
  }

  dateToLocalLanguageString(language: string, date: Date): string {
    const datepipe: DatePipe = new DatePipe('en-US');
    let returnDate = '';
    if (!date) {
      return returnDate;
    }
    if (language && language.length === 5 && date) {
      if (language === 'da-DK') {
        returnDate = datepipe.transform(date, 'dd-MMM-YYYY');
      } else {
        returnDate = date.toLocaleDateString(language, {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        });
      }
    }
    return returnDate;
  }
}
