import fs from "fs";
import { resolve } from "path";
import { tsvParse, autoType } from "d3-dsv";
import { ascending } from "./helpers";

const DATA_DIR = resolve(`${__dirname}/../../../data`);

export const artists = tsvParse(
  fs.readFileSync(`${DATA_DIR}/artists.tsv`, "utf-8"),
  autoType
);

artists.sort((a, b) => ascending(a.name, b.name));
