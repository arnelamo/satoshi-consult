import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertDateToNorwegian(dateString: string): string {
  // Parse the date string into a Date object
  const date = new Date(dateString);

  // Create a new Intl.DateTimeFormat object with 'no-NO' locale
  const formatter = new Intl.DateTimeFormat("no-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Format the date and return it as a string
  return formatter.format(date);
}

export function getNumberWithTwoDecimals(num: number): string {
  return new Intl.NumberFormat("no-NO", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.floor(num * 100) / 100);
}

export function getCalendarPropsData() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const nextMonth = (currentMonth + 1) % 12;
  const inCaseNextYear =
    nextMonth === 0 ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

  const defaultMonth = new Date(currentDate.getFullYear(), currentMonth);
  const toMonth = new Date(inCaseNextYear, nextMonth);

  return { defaultMonth, toMonth };
}
