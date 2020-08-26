import { tsvFormat } from "d3-dsv";
import { artists } from "../../js/artists";

export function get(req, res, next) {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });

  res.end(tsvFormat(artists));
}
