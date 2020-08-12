<script context="module">
  export async function preload({ params }) {
    const artistsRows = await this.fetch("/api/artists.csv").then(d =>
      d.text()
    );

    return { artistsRows };
  }
</script>

<script>
  import { csvParse } from "d3-dsv";
  import { slugify } from "../../js/helpers.js";

  export let artistsRows;

  // Make a list of unique artist names
  $: artistNames = Array.from(
    new Set(csvParse(artistsRows).map(d => d.name))
  ).sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));
</script>

<svelte:head>
  <title>Final Show - 2020</title>
</svelte:head>

<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Artists</h1>
      <h2 class="subtitle">MA/MFA Computational Arts 2020 - Goldsmiths</h2>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="content">

      <ul>
        {#each artistNames as name}
          <li>
            <a href="artists/{slugify(name)}">{name}</a>
          </li>
        {/each}
      </ul>

    </div>
  </div>
</section>
