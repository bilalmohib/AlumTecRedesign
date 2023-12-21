enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

const formatDate = (date: Date): string => {
  let day = date.getDate().toString();
  let month = Months[date.getMonth() + 1].toString();
    const year = date.getFullYear().toString();
    
    const time = date.toLocaleTimeString();

  if (day.length === 1) {
    day = `0${day}`;
  }

  if (month.length === 1) {
    month = `0${month}`;
  }

  return `${day}/${month}/${year} ${time}`;
};
