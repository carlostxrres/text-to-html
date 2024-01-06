export function toKebabCase(input) {
  return input
    .replace(/[^a-z0-9\s]/gi, "")
    .replace(/\s+/g, "-")
    .toLowerCase()
}
