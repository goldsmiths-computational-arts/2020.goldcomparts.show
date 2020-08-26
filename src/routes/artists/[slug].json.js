import { artists } from "../../js/artists";
import { slugify } from "../../js/helpers";

const artistBySlug = new Map(
  artists.map((d) => {
    return [slugify(d.name), JSON.stringify(d)];
  })
);

export function get(req, res, next) {
  const { slug } = req.params;

  if (artistBySlug.has(slug)) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(artistBySlug.get(slug));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}
