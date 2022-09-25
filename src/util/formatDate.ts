export function formatDate(date: string) {
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  if (date !== undefined) {
    const year = date.split('-')[0];
    const month = date.split('-')[1];
    const day = date.split('-')[2];
    const formatedMonth = months[parseInt(month)];

    return day + " de " + formatedMonth + ', ' + year;
  }
};