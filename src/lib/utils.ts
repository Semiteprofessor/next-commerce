import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { replace } from "lodash";
import numeral from "numeral";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ----------------------------------------------------------------------

const locale: string = "en-US";

// Helper type for inputs that should always be number-like
type NumericInput = number | string;

/**
 * Format a number as currency
 */
export function fCurrency(value: NumericInput): string {
  const num = typeof value === "string" ? Number(value) : value;

  if (isNaN(num)) {
    throw new Error(`fCurrency: Invalid number input -> ${value}`);
  }

  const currencyCode: string = process.env.BASE_CURRENCY || "USD";

  const currency = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
  });

  return currency.format(num);
}

/**
 * Format a number as percentage (0.0%)
 */
export function fPercent(value: NumericInput): string {
  const num = typeof value === "string" ? Number(value) : value;

  if (isNaN(num)) {
    throw new Error(`fPercent: Invalid number input -> ${value}`);
  }

  return numeral(num / 100).format("0.0%");
}

/**
 * Format a number with thousand separators
 */
export function fNumber(value: NumericInput): string {
  const num = typeof value === "string" ? Number(value) : value;

  if (isNaN(num)) {
    throw new Error(`fNumber: Invalid number input -> ${value}`);
  }

  return numeral(num).format();
}

/**
 * Shorten number formatting (e.g., 1k, 1.5m)
 */
export function fShortenNumber(value: NumericInput): string {
  const num = typeof value === "string" ? Number(value) : value;

  if (isNaN(num)) {
    throw new Error(`fShortenNumber: Invalid number input -> ${value}`);
  }

  return replace(numeral(num).format("0.00a"), ".00", "");
}

/**
 * Format a number with data size units (e.g., 10.5 MB)
 */
export function fData(value: NumericInput): string {
  const num = typeof value === "string" ? Number(value) : value;

  if (isNaN(num)) {
    throw new Error(`fData: Invalid number input -> ${value}`);
  }

  return numeral(num).format("0.0 b");
}
