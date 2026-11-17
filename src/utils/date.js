const MONTHS = ['січ', 'лют', 'бер', 'кві', 'тра', 'чер', 'лип', 'сер', 'вер', 'жов', 'лис', 'гру'];

// '2027-01-12' -> '12.01.2027'
export function formatDate(iso) {
  const [year, month, day] = iso.split('-');
  return `${day}.${month}.${year}`;
}

// '2027-01-12' -> { day: '12', month: 'січ' }
export function dayAndMonth(iso) {
  const [, month, day] = iso.split('-');
  return { day, month: MONTHS[Number(month) - 1] };
}
