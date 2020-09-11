import { csvFormat } from "d3-dsv";
import { artists } from "../../js/artists";

const out = artists.map((d) => {
  return {
    username: d.username,
    name: d.name,
    otherName: d.otherName,
    title: d.title,
    artworkHTML: d.artworkHTML,
    wallTextHTML: d.wallTextHTML,
    interactiveUrl: d.interactiveUrl,
    vimeo: d.vimeo,
    facebook: d.facebook,
    youtube: d.youtube,
    instagram: d.instagram,
    twitter: d.twitter,
    twitch: d.twitch,
    publicEmail: d.publicEmail,
  };
});

export function get(req, res, next) {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });

  res.end(csvFormat(out));
}
