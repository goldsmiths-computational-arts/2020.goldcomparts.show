import fs from "fs";
import { DATA_DIR } from "./server-constants";
import { tsvParse, autoType } from "d3-dsv";
import { ascending } from "./helpers";
import MarkdownIt from "markdown-it";

const markdown = new MarkdownIt();

export const artists = tsvParse(
  fs.readFileSync(`${DATA_DIR}/artists.tsv`, "utf-8"),
  autoType
);

artists.forEach((artist) => {
  try {
    const md = fs.readFileSync(
      `${DATA_DIR}/bios/${artist.username}.md`,
      "utf-8"
    );
    artist.bioHTML = markdown.render(md);
  } catch (err) {
    // console.log(err)
  }
});

artists.sort((a, b) => ascending(a.name, b.name));
