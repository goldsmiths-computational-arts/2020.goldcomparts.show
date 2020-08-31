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
    padding-bottom: 4rem;
  }
  .leftColumn {
    background-image: url(/img/HeroAlt.png);
    background-repeat: no-repeat;
    background-position: 0px 10%;
    background-size: contain;
    height: 800px;
  }
  .artistList {
    font-weight: 600;
    text-transform: lowercase;
    text-align: center;
    columns: 3;
    list-style-type: none;
    margin-left: 0px;
  }
  .content {
    font-family: futura-pt, sans-serif;
    font-weight: 400;
    font-size: 1.3rem;
    color: #fcfcfc;
    padding-top: 4rem;
  }
  .artistTitle {
    font-family: futura-pt, sans-serif;
    font-weight: 600;
    font-size: 4rem;
    text-transform: uppercase;
    color: #fcfcfc;
    padding-bottom: 2rem;
  }
  li {
    font-family: futura-pt, sans-serif;
    font-weight: 400;
    font-size: 2rem;
    color: #fcfcfc;
  }

  @media only screen and (max-width: 600px) {
    .artistList {
      columns: 1;
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
      <div class="container">
        <div class="columns">
          <div class="column is-6 leftColumn">
            <h2 class="showDates">17-20 September 2020</h2>
            <h2 class="subtitle">The Computational Arts MA/MFA Degree Show</h2>
            <h2 class="location">Goldsmiths, University of London</h2>
          </div>
          <div class="column is-6">
            <figure class="image is-660x200">
              <img
                src="img/LogoTypeSmall.png"
                alt="Chimera Garden"
                align="right"
                width="440"
                style="padding-bottom: 3.5rem;" />
            </figure>
            <div class="openQuote">
              “​We are all chimeras, theorized and fabricated hybrids of machine
              and organism”
            </div>
            <div class="reference">Donna Haraway - A Cyborg Manifesto.</div>
            <div class="introBody">
              The exhibition presents a collection of assemblages we’ve
              cultivated under the extraordinary and global conditions of these
              troubled months. Fantastic fusions of technology, ideas, humans
              and other creatures, these works have emerged, flourishing, from a
              twisted reality of seismic chaos and confusion.
            </div>
            <div class="introBodyStrong">
              Chimera Garden is a ​celebration of Computational Art now​, a
              blend of physical and online installation and performance, a
              four-day festival open to all via free ticket registration at this
              site soon.
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<section class="section">

  <div class="container">
    <div class="content">

      <p>
        The Goldsmiths MA/MFA in Computational Art invites you to step into
        Chimera Garden and walk among the collection of assemblages we’ve
        cultivated under the extraordinary conditions of these troubled months.
        Fantastic fusions of technology, ideas, humans and other creatures,
        these works have emerged, flourishing, from a twisted reality of seismic
        chaos and confusion. In our current place of epochal chaos and
        transformation, the foundations on which we’ve built the seemingly
        monolithic and unquestionable have been disturbed. We are not on solid
        ground, but we never really were. Exposed fault lines have thrown
        societal inequalities and injustices into brutal relief, emitting new
        framings for old questions. At the same time, as individuals we’ve been
        distanced, physically and socially, into unique states of alienation.
        It’s a liminal space, where computation now mediates our lives in ways
        unseen just a few months ago. So as a cohort, we’re uniquely situated to
        re-imagine, to re-world - making new connections to each other and the
        world around us, building new possibilities of being.
      </p>
      <p>
        Chimera Garden is a blend of physical and online installation and
        performance, a four-day festival open to all via free ticket
        registration on this site soon.
      </p>

      <h2 class="artistTitle" style="text-align: center;">Artists</h2>
      <ul class="artistList">
        {#each artists as artist}
          <li>{artist.name}</li>
        {/each}
      </ul>
    </div>
  </div>

</section>
