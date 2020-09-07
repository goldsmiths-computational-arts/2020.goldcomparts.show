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
</script>

<style>
  .bio-boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .bio-box {
    display: inline-block;
    margin: 16px;
    text-align: left;
    background-color: white;
    width: 190px;
    height: 250px;
  }
/*
  .bio-box:hover {
    background-color: rgba(238, 238, 238, 1);
    border: 2px solid rgba(0, 0, 0, 1);
  }

  .bio-box:hover a {
    color: black;
  }*/

  .bio-photo {
    width: 100%;
    height: 190px;
    display: block;
    background-position: center;
    background-size:contain;
    background-color: #A6A8AB;
  }
  .bio-box h6{
    padding:0.5em;
  }
  .bio-box:hover .bio-photo {
    /*border: 1px solid rgba(0, 0, 0, 0.5);*/
  }
</style>

<svelte:head>
  <title>Final Show - 2020</title>
</svelte:head>

<!-- <section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Artists</h1>
      <h2 class="subtitle">MA/MFA Computational Arts 2020 - Goldsmiths</h2>
    </div>
  </div>
</section> -->

<section class="section bg-col-7">
  <div class="container">
    <div class="content">

      <div class="bio-boxes">

        {#each artists as artist}
          <div class="bio-box">
            <a href="artists/{slugify(artist.name)}">
              <div
                class="bio-photo"
                style="background-image:url(img/bios/{artist.username}.jpeg)">
              </div>
              <h6>{artist.name} {artist.otherName ? `  (${artist.otherName})` : ''}</h6>
            </a>
          </div>
        {/each}
      </div>

    </div>
  </div>
</section>
