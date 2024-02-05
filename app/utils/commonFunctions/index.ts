import { Months } from "../enums";

export const convertToSlug = (input: string) => {
  return input.toLowerCase().replace(/\s+/g, "-");
};

export const formatDate = (date: Date): string => {
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
