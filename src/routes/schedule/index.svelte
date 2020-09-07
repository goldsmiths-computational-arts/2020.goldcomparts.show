<script context="module">
  export async function preload({ params }) {
    const scheduleRows = await this.fetch("schedule.tsv").then(d => d.text());
    const artistsRows = await this.fetch("artists.tsv").then(d => d.text());

    return { scheduleRows, artistsRows };
  }
</script>

<script>
  import { tsvParse } from "d3-dsv";
  import { slugify } from "../../js/helpers";

  export let scheduleRows;
  export let artistsRows;

  // Make a list of unique artist names
  let artists;
  let events;
  let artistByUsername = new Map();
  $: {
    artists = tsvParse(artistsRows);
    artists.forEach(artist => {
      artistByUsername.set(artist.username, artist);
    });
    events = tsvParse(scheduleRows).map(row => {
      console.log(row);
      // TODO localise the time etc...
      row.artists = [];
      if (row.username.trim()) {
        row.username.split(",").forEach(username => {
          const artist = artistByUsername.get(row.username.trim());
          if (artist) {
            row.artists.push(artist);
          } else {
            console.log(`Couldn't find "${username.trim()}"`);
          }
        });
      }

      return row;
    });
  }
</script>

<svelte:head>
  <title>Schedule - Final Show - 2020</title>
</svelte:head>

<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Final Show - 2020</h1>
      <h2 class="subtitle">MA/MFA Computational Arts - Goldsmiths</h2>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="content">

      <h2>Event schedule</h2>

      <p>TODO - make this in to a proper listing</p>

      <ul>
        {#each events as event}
          <li>
            {event.title} - {event.startTime}
            <br />
            {#each event.artists as artist}
              <a href="artists/{artist.slug}">{artist.name}</a>
            {/each}

          </li>
        {/each}
      </ul>

    </div>
  </div>
</section>
