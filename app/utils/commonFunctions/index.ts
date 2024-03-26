import { Months } from "../enums";

import { Timestamp } from "firebase/firestore";

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

  return `${month} ${day} ${year} ${time}`;
};

export function formatDateFromFirebaseTimestamp(timestampObject: { seconds: number, nanoseconds: number }, format: string): string {
  const timestamp = new Timestamp(timestampObject.seconds, timestampObject.nanoseconds);
  const date = timestamp.toDate(); // Convert Firebase Timestamp to Date object
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'UTC' // Adjust timezone as needed
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

// Usage
export const extractTimestamp = (createdAt: string) => {
  const [seconds, nanoseconds] = createdAt
    .replace('Timestamp(', '')
    .replace(')', '')
    .split(', ')
    .map((item) => parseInt(item));

  return { seconds, nanoseconds };
};