import { artists } from "../../js/artists";

const allThemes = artists
  .map((d) => d.themes)
  .flat()
  .filter((d) => d);

const allMedia = artists
  .map((d) => d.media)
  .flat()
  .filter((d) => d);

const themes = Array.from(new Set(allThemes).values()).sort();
const media = Array.from(new Set(allMedia).values()).sort();

const out = {
  themes,
  media,
};

export function get(req, res, next) {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });

  res.end(JSON.stringify(out));
}
