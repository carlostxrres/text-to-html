export function getRelativeTime(timestamp) {
  const now = Date.now()
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" })

  const timeUnits = {
    year: 24 * 60 * 60 * 1000 * 365,
    month: 24 * 60 * 60 * 1000 * 30,
    week: 24 * 60 * 60 * 1000 * 7,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000,
  }

  const elapsed = now - timestamp

  for (const [unit, milliseconds] of Object.entries(timeUnits)) {
    const quotient = -1 * (elapsed / milliseconds)
    if (Math.abs(quotient) >= 1) {
      return rtf.format(Math.round(quotient), unit)
    }
  }
}
