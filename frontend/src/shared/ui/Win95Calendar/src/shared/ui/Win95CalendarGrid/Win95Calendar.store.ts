export class CalendarMonth {
  private year: number;
  private month: number; // 1-based: 1=Январь, 12=Декабрь
  private firstDayOfWeek: number = 1; // 0=Monday, 6=Sunday

  constructor(year: number, month: number) {
    this.year = year;
    this.month = month;
  }

  /** Сколько дней в месяце */
  public daysInMonth(): number {
    // new Date(year, monthIndex + 1, 0) возвращает последний день месяца
    return new Date(this.year, this.month, 0).getDate();
  }

  /** День недели первого числа месяца (0=Monday, 6=Sunday) */
  public firstWeekDay(): number {
    const day = new Date(this.year, this.month - 1, 1).getDay(); // 0=Sun
    return this.convertToMondayStart(day);
  }

  /** День недели последнего числа месяца (0=Monday, 6=Sunday) */
  public lastWeekDay(): number {
    const day = new Date(
      this.year,
      this.month - 1,
      this.daysInMonth(),
    ).getDay();
    return this.convertToMondayStart(day);
  }

  /** Сколько строк (недель) нужно для календаря */
  public numberOfWeeks(): number {
    const firstWeekDay = this.firstWeekDay();
    const totalDays = this.daysInMonth();

    const firstWeekDaysCount = 7 - firstWeekDay;
    const remainingDays = totalDays - firstWeekDaysCount;
    const fullWeeks = Math.ceil(remainingDays / 7);

    return 1 + fullWeeks; // 1 первая неделя + полные недели
  }

  /** Преобразуем день недели из Sunday=0 в Monday=0 */
  private convertToMondayStart(day: number): number {
    return day === 0 ? 6 : day - 1;
  }

  /** Получаем массив недель с числами для календаря */
  public getWeeks(): number[][] {
    const weeks: number[][] = [];
    const days = this.daysInMonth();
    const firstWeekDay = this.firstWeekDay();
    let dayCounter = 1;

    // Первая неделя
    const firstWeek: number[] = Array(firstWeekDay).fill(0); // пустые дни до месяца
    while (firstWeek.length < 7 && dayCounter <= days) {
      firstWeek.push(dayCounter++);
    }
    weeks.push(firstWeek);

    // Остальные недели
    while (dayCounter <= days) {
      const week: number[] = [];
      for (let i = 0; i < 7; i++) {
        if (dayCounter <= days) week.push(dayCounter++);
        else week.push(0); // пустые дни после конца месяца
      }
      weeks.push(week);
    }

    return weeks;
  }
}
