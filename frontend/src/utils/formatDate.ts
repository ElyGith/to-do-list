import { DateTime } from "luxon";

export function formatDate(value: Date |string): string | undefined {

  const date = typeof value === 'string'
    ? DateTime.fromISO(value)
    : DateTime.fromJSDate(value)

  if (!date.isValid) return String(value)

  return date.toFormat("dd LLL yyyy 'à' HH:mm")
}
