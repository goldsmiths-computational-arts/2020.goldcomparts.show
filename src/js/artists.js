import fs from "fs";
import { resolve } from "path";
import { tsvParse, autoType } from "d3-dsv";
import { ascending } from "./helpers";
import MarkdownIt from "markdown-it";

const DATA_DIR = resolve(`${__dirname}/../../../data`);

const markdown = new MarkdownIt();

export const artists = tsvParse(
  fs.readFileSync(`${DATA_DIR}/artists.tsv`, "utf-8"),
  autoType
);

artists.forEach((artist) => {
  try {
    const md = fs.readFileSync(`${DATA_DIR}/bios/${artist.slug}.md`, "utf-8");
    artist.bioHTML = markdown.render(md);
  } catch (err) {
    // console.log(err)
  }
});

artists.sort((a, b) => ascending(a.name, b.name));
