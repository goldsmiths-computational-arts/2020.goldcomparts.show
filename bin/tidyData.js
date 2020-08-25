#!/usr/bin/env node -r esm
import fs from "fs";
import { execSync } from "child_process";
import { csvParseRows, tsvFormat } from "d3-dsv";
import { slugify, ascending } from "../src/js/helpers";

const rawDir = `${__dirname}/../raw`;
const dataDir = `${__dirname}/../data`;
const biosDir = `${__dirname}/../data/bios`;
const photosDir = `${__dirname}/../static/img/photos`;

[biosDir, photosDir].forEach((d) => fs.mkdirSync(d, { recursive: true }));

const artistsCsv = `${rawDir}/artists.csv`;
const artistsTsv = `${dataDir}/artists.tsv`;

const headers = `
timestamp
email
name
showOtherName
otherName
otherNameLanguage
imageFile
location
bioTextOrFile
bioText
bioMarkdown
website
youTube
vimeo
twitch
facebook
twitter
instagram
publicEmail`
  .trim()
  .split("\n");

const artists = csvParseRows(fs.readFileSync(artistsCsv, "utf-8"), (row, i) => {
  if (!i) return null;
  const out = {};
  headers.forEach((h, j) => {
    const value = row[j];
    out[h] = row[j];
  });
  return out;
});

artists.forEach((d) => {
  delete d.showOtherName;
  delete d.otherNameLanguage;
  delete d.timestamp;
  delete d.email;
  delete d.bioTextOrFile;

  d.slug = slugify(d.name);

  if (d.bioMarkdown) {
    console.log(d.bioMarkdown);
    const id = d.bioMarkdown.split("=")[1];
    try {
      d.bioText = fs.readFileSync(`${rawDir}/bios/${id}.md`);
    } catch (err) {
      console.warn(`Couldn't open ${id} for ${d.slug}`);
    }
  }

  fs.writeFileSync(`${biosDir}/${d.slug}.md`, d.bioText);
  delete d.bioText;

  if (d.imageFile) {
    const id = d.imageFile.split("=")[1];
    // Resize the images and convert to JPEG, some are PNGs just with .jpeg extension
    execSync(
      `sips -s format jpeg -Z 600 ${rawDir}/photos/${id}.jpeg --out ${photosDir}/${d.slug}.jpeg`
    );
  }
});

artists.sort((a, b) => ascending(a.name, b.name));

// console.log(artists);
fs.writeFileSync(artistsTsv, tsvFormat(artists));
