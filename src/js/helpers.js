export const slugify = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-z]+/g, " ")
    .trim()
    .replace(/ /g, "-");
};

export function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

export function trackEvent(category, action, label) {
  ga("send", "event", category, action, label);
}
