<script context="module">
  export async function preload({ params }) {
    const eventRows = await this.fetch("schedule.tsv").then(d => d.text());

    return { eventRows };
  }
</script>

<script>
  import { tsvParse } from "d3-dsv";
  import { slugify } from "../../js/helpers";

  export let eventRows;

  $: events = tsvParse(eventRows).map(row => {
    // TODO localise the time etc...
    return row;
  });
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
            <a href="artists/{slugify(event.artist)}">{event.artist}</a>

          </li>
        {/each}
      </ul>

    </div>
  </div>
</section>
