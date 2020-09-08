var slugify = function slugify(str) {
  return str.toLowerCase().replace(/[^a-z]+/g, " ").trim().replace(/ /g, "-");
};
function trackEvent(category, action, label) {
  ga("send", "event", category, action, label);
}

export { slugify as s, trackEvent as t };
