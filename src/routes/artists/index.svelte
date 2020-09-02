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
  $: artists = tsvParse(artistsRows);
</script>

<style>
  .bio-boxes {
    display: flex;
    flex-wrap: wrap;
    padding-left: 7.5%;
  }

  .bio-box {
    display: inline-block;
    border: 1px solid #ddd;
    padding: 16px;
    margin: 16px;
    text-align: center;

    transition: 0.25s ease-in;

    width: 220px;
    height: 220px;
  }

  .bio-box:hover {
    background-color: #eee;
  }

  .bio-box:hover a {
    color: black;
  }

  .bio-photo {
    margin-left: auto;
    margin-right: auto;

    width: 150px;
    height: 150px;
    display: block;
  }
</style>

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

      <div class="bio-boxes">

        {#each artists as artist}
          <div class="bio-box">
            <a href="artists/{slugify(artist.name)}">
              <img
                class="bio-photo"
                src="img/bios/{artist.username}.jpeg"
                alt={artist.name} />
              {artist.name} {artist.otherName ? `  (${artist.otherName})` : ''}
            </a>
          </div>
        {/each}
      </div>

    </div>
  </div>
</section>
