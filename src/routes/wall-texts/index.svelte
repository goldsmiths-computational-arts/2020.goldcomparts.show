<script context="module">
  export async function preload({ params }) {
    const artistsRows = await this.fetch("artists.tsv").then(d => d.text());

    return { artistsRows };
  }
</script>

<script>
  import { tsvParse } from "d3-dsv";
  import { slugify } from "../../js/helpers.js";

  export let artistsRows;

  // Make a list of unique artist names
  $: artists = tsvParse(artistsRows).sort((a, b) =>
    a.name.localeCompare(b.name, "en", { sensitivity: "base" })
  );

  $: pdfCmds = artists
    .map(
      d =>
        `puppeteer-pdf http://localhost:3000/wall-texts/${slugify(
          d.name
        )} --path raw/wall-text-pdf/${slugify(d.name)}.pdf`
    )
    .join("\n");
</script>

<section class="section bg-col-7">
  <div class="container">
    <div class="content">

      <textarea cols="80" rows="10">{pdfCmds}</textarea>

      <ul>
        {#each artists as artist}
          <li>
            <a href="wall-texts/{slugify(artist.name)}">{artist.name}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>
