<script context="module">
  export async function preload({ params }) {
    const artistsRows = await this.fetch("artists.tsv").then(d => d.text());

    return { artistsRows };
  }
</script>

<script>
  import { tsvParse } from "d3-dsv";
  import { slugify } from "../js/helpers";
  import Meta from "../components/Meta.svelte";

  export let artistsRows;

  // console.log(artistsRows);

  $: artists = tsvParse(artistsRows).sort((a, b) =>
    a.name.localeCompare(b.name, "en", { sensitivity: "base" })
  );
</script>

<style>
  h2 {
    color: #fcfcfc;
  }
  .subtitle {
    font-family: futura-pt, sans-serif;
    font-weight: 600;
    font-size: 2.5rem;
    color: #fcfcfc;
  }
  .showDates {
    font-family: futura-pt, sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    color: #fcfcfc;
    padding-top: 3rem;
  }
  .location {
    font-family: futura-pt, sans-serif;
    font-weight: 500;
    font-size: 1.75rem;
    color: #fcfcfc;
  }
  .openQuote {
    font-family: futura-pt, sans-serif;
    font-weight: 300;
    font-style: italic;
    font-size: 1.1rem;
    color: #fcfcfc;
    padding-bottom: 0.4rem;
    text-align: right;
  }
  .reference {
    font-family: futura-pt, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: #5f5f5f;
    padding-bottom: 2rem;
    text-align: right;
  }
  .introBody {
    font-family: futura-pt, sans-serif;
    font-weight: 400;
    font-size: 1.3rem;
    color: #fcfcfc;
    padding-bottom: 1.2rem;
  }
  .introBodyStrong {
    font-family: futura-pt, sans-serif;
    font-weight: 600;
    font-size: 1.3rem;
    color: #fcfcfc;
    padding: 2rem 0rem;
  }
  .leftColumn {
    background-image: url(/img/HeroAlt.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
    min-height: 700px;
    max-height: 1500px;
    height: 80vh;
  }
  .content {
    font-family: futura-pt, sans-serif;
    font-weight: 400;
    font-size: 1.3rem;
    color: #fcfcfc;
    padding-top: 4rem;
  }

  @media only screen and (max-width: 768px) {
    .leftColumn {
      /*background-position: bottom right;*/
      /*background-size: 100% auto;*/
      height: 100vh;
      min-height: 500px;
      height: 50vh;
    }   
    .showDates {
      padding-top: 0rem;
    }
  }

</style>

<svelte:head>
  <Meta
    title="Chimera Garden - Computational Arts MA/MFA Degree Show Goldsmiths" />

</svelte:head>

<div class="hero-container">
  <section class="hero">
    <div class="hero-body">
      <div class="container is-widescreen">
        <div class="columns">
          <div class="column is-6 leftColumn">
    
          </div>
          <div class="column is-6">
            <div>
              <h2 class="showDates">17-20 September 2020</h2>
              <h2 class="subtitle">The Computational Arts MA/MFA Degree Show</h2>
              <h2 class="location">Goldsmiths, University of London</h2>
            </div>
            <div class="introBodyStrong">
              Chimera Garden is a ​celebration of Computational Art now​, a
              blend of physical and online installation and performance, a
              four-day festival open to all via free ticket registration at this
              site soon.
            </div>
            <div>
              <a href="/schedule" class="rounded-link col-7 bd-col-7">EVENTS SCHEDULE</a>
              <a href="/getting-there" class="rounded-link col-7 bd-col-7">VISIT ON-SITE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


