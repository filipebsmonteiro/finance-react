// return Intl.DateTimeFormat('en-US', {
export const date = Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'full',
  timeStyle: 'long',
  // weekday: 'long',
  // year: 'numeric',
  // month: 'long',
  // day: 'numeric'
  // hour12: false,
  // hour: 'numeric',
  // minute: 'numeric',
  // second: 'numeric',
  // timeZone: 'Australia/Sydney',
  // timeZoneName: 'short',
});

export const invertYearMonth = {
  format: (yearMonth: string) => {
    yearMonth = String(yearMonth);
    const monthNumber = yearMonth.slice(-2);
    const yearNumber = yearMonth.slice(0, 4);
    const date = new Date();

    date.setMonth(Number(monthNumber) - 1);

    return `${date.toLocaleString('pt-BR', { month: 'short' })} de ${yearNumber}`;
  }
};