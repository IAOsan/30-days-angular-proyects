import { Pipe } from '@angular/core';

const AVERAGE_DAYS_BY_MONTH = 30.4167;
const MS_IN_MINUTE = 60000;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_WEEK = 7;

function getElapsedMinutes(date: string | Date): number {
  const now = new Date().getTime();
  const parsedDate = new Date(date).getTime();
  return (now - parsedDate) / MS_IN_MINUTE;
}

function pluralize(value: number, word: string): string {
  return value === 1 ? word : word + 's';
}

function generateTimeAgoStr(time: number, unit: string): string {
  const roundedTime = Math.round(time);

  return `${roundedTime} ${pluralize(roundedTime, unit)} ago`;
}

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe {
  transform(value: string | Date): string {
    const elapsedMinutes = getElapsedMinutes(value);

    if (elapsedMinutes < 1) return 'now';
    if (elapsedMinutes < MINUTES_IN_HOUR)
      return generateTimeAgoStr(elapsedMinutes, 'minute');

    const elapsedHours = elapsedMinutes / MINUTES_IN_HOUR;
    if (elapsedHours < HOURS_IN_DAY)
      return generateTimeAgoStr(elapsedHours, 'hour');

    const elapsedDays = elapsedHours / HOURS_IN_DAY;
    if (elapsedDays < DAYS_IN_WEEK)
      return generateTimeAgoStr(elapsedDays, 'day');

    const elapsedWeeks = elapsedDays / DAYS_IN_WEEK;
    if (elapsedDays < AVERAGE_DAYS_BY_MONTH)
      return generateTimeAgoStr(elapsedWeeks, 'week');

    const elapsedMonths = elapsedDays / AVERAGE_DAYS_BY_MONTH;
    return generateTimeAgoStr(elapsedMonths, 'month');
  }
}
