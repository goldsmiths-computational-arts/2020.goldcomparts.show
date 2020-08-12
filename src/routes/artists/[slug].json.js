import fs from "fs";
import { resolve } from "path";
import { csvParse } from "d3-dsv";
import { slugify } from "../../js/helpers";

const RAW_DIR = resolve(`${__dirname}/../../../raw`);

const rows = csvParse(fs.readFileSync(`${RAW_DIR}/artists.csv`, "utf-8"));

const artistBySlug = new Map(
  rows.map((d) => {
    return [slugify(d.artist), JSON.stringify(d)];
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
