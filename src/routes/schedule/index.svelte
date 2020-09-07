<script context="module">
  export async function preload({ params }) {
    const scheduleRows = await this.fetch("schedule.tsv").then(d => d.text());
    const artistsRows = await this.fetch("artists.tsv").then(d => d.text());

    return { scheduleRows, artistsRows };
  }
</script>

<script>
  import { tsvParse } from "d3-dsv";
  import { group } from "d3-array";
  import { timeFormat } from "d3-time-format";
  import { slugify } from "../../js/helpers";

  export let scheduleRows;
  export let artistsRows;

  const formatDate = timeFormat("%A %d %b");
  const formatTime = timeFormat("%H.%M");

  // Make a list of unique artist names
  let artists;
  let events;
  let artistByUsername = new Map();
  let eventsByDay;

  $: {
    artists = tsvParse(artistsRows);
    artists.forEach(artist => {
      artistByUsername.set(artist.username, artist);
    });
    // console.log(artistByUsername);

    events = tsvParse(scheduleRows)
      .map(row => {
        // console.log(row);
        // TODO localise the time etc...

        row.themes = row.themes ? row.themes.split(/,\s*/) : [];
        row.medium = row.medium ? row.medium.split(/,\s*/) : [];

        row.artists = [];
        if (row.username.trim()) {
          row.username.split(/,\s*/).forEach(username => {
            const artist = artistByUsername.get(username);
            if (artist) {
              row.artists.push(artist);
            } else {
              console.log(`Couldn't find "${username}"`);
            }
          });
        }

        row.startsAt = new Date(row.startTime);

        // console.log(row);
        // console.log(row.startTime);

        return row;
      })
      .filter(d => d.startTime);

    console.log(events);
    eventsByDay = group(events, d => d.startTime.slice(0, 10));
  }

  const now = new Date(); // TODO make this a reactive store

  function happeningNow(event) {
    return event.startsAt >= now && event.endsAt < now;
  }

  function inPast(event) {
    return event.endsAt < now;
  }

  function eventBdClass(event) {
    if (inPast(event)) {
      return "bd-col-7";
    }

    if (happeningNow(event.startsAt)) {
      return "bd-col-1"; // TODO design shows red colour not in pallette
    }
  }
</script>

<style>
  .event {
    background-color: white;
    margin-bottom: 1em;
    border-left: 6px solid transparent;
    padding: 24px;
  }

  .event-time,
  .event-title {
    font-size: 18px;
    font-weight: 600;
  }

  .artist-pic {
    width: 64px;
    height: 64px;
    border-radius: 32px;
  }
</style>

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

<section class="section bg-col-7">
  <div class="container">
    <div class="content">

      <h2>Event schedule</h2>

      <p>TODO - make this in to a proper listing</p>

      {#each Array.from(eventsByDay.entries()) as [date, events]}
        <h2>{formatDate(events[0].startsAt)}</h2>

        {#each events as event, i}
          <div class="event {eventBdClass(event)}">
            <div class="event-time">{formatTime(event.startsAt)}</div>
            <div class="event-title">{event.title}</div>
            {#each event.artists as artist}
              <a href="artists/{artist.slug}">{artist.name}</a>
            {/each}

            {#each event.artists as artist}
              <a href="artists/{artist.slug}">
                <img
                  class="artist-pic"
                  src="img/bios/{artist.username}.jpeg"
                  alt={artist.name} />
              </a>
            {/each}

            <ul>
              {#each event.themes as theme}
                <li>{theme}</li>
              {/each}
            </ul>

            <ul>
              {#each event.medium as media}
                <li>{media}</li>
              {/each}
            </ul>

          </div>
        {/each}
      {/each}

    </div>
  </div>
</section>
