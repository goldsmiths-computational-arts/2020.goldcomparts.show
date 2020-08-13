import fs from "fs";
import { resolve } from "path";
import { csvParse, tsvFormat } from "d3-dsv";
import { ascending } from "../../js/helpers";

const RAW_DIR = resolve(`${__dirname}/../../../raw`);

const rows = csvParse(fs.readFileSync(`${RAW_DIR}/schedule.csv`, "utf-8"));

const scheduleEvents = rows
  .filter((d) => d.title)
  .map((d) => {
    delete d.notes;
    return d;
  })
  .sort((a, b) => ascending(a.name, b.name));

export function get(req, res, next) {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });

  res.end(tsvFormat(scheduleEvents));
}
