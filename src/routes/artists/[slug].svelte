<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`artists/${params.slug}.json`);
    const artist = await res.json();

    return { artist };
  }
</script>

<script>
  import { range } from "d3-array";
  import { slugify, formatDate, formatDay, formatTime } from "../../js/helpers";
  import SocialLink from "../../components/SocialLink.svelte";

  export let artist;

  $: artworkImages = range(artist.numImages).map(
    i => `/img/artworks/${artist.username}-${i + 1}.jpeg`
  );
</script>

<style>
  /*.content {*/
  /*display: grid;*/
  /*justify-content: center;*/
  /*grid-template-columns: 400px auto;*/
  /*grid-template-rows: 50px 400px 10px;*/
  /*grid-template-areas: "img name" "img bio" "links bio";*/
  /*}*/

  .bio-photo {
    width: 100%;
    padding-bottom: 100%;
    height: 0px;
    display: block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #a6a8ab;
  }

  h3 {
    margin-top: 0.6666em;
  }

  a {
    color: #387194;
  }

  .artists-section {
    min-height: 100vh;
  }

  .content ul {
    list-style: none;
    margin-left: 0em;
  }

  .align-center {
    text-align: center;
    max-width: 80%;
  }
  /*  .artist-bio {
    padding-top: 50px;
    grid-area: bio;
    padding-left: 10px;
  }

  .social-links {
    grid-area: links;
    display: flex;
    flex-direction: column;
  }

/*  .artist-name {
    grid-area: name;
    padding-left: 10px;
  }*/

  @media screen and (max-width: 768px) {
    /*    .content {
      display: grid;
      grid-template-columns: 400px;
      grid-template-rows: 400px 50px auto;
      grid-template-areas: "img" "name" "bio" "links";
    }*/

    h2 {
      margin-top: 0.5714em;
    }

    .social-links {
      padding-top: 25px;
    }

    .see-more {
      text-align: center;
      max-width: 80%;
    }
  }
</style>

<svelte:head>
  <title>{artist.name} - Final Show - 2020</title>
</svelte:head>

<div class="container is-desktop">
  {#each artworkImages as image}
    <img src={image} alt="" />
  {/each}
</div>

<section class="section bg-col-7">
  <div class="content">
    <section class="section bg-col-7">
      <div class="container is-widescreen align-center">
        <h2 class="artwork-title">{artist.title}</h2>
        <h3>
          {artist.name}
          {#if artist.otherName}({artist.otherName}){/if}
        </h3>
        <div class="artwork-desc">
          {#if artist.artworkHTML}
            {@html artist.artworkHTML}
          {:else}
            <p>No artwork description provided</p>
          {/if}
        </div>

        <div class="artwork-instructions" style="padding-bottom: 10px;">
          {#if artist.webInstructionsHTML}
            <h3>How to interact</h3>
            {@html artist.webInstructionsHTML}
          {/if}
        </div>
        {#if artist.interactiveUrl}
          <a href={artist.interactiveUrl} class="rounded-link bg-col-1 col-4">
            See the work
          </a>
        {/if}
        <br />
        <div>#images/video carousel#</div>
      </div>
    </section>

    <section class="section bg-col-2 col-6">
      <div class="container is-widescreen see-more">
        <h2>Want to see more?</h2>
        <div class="columns">
          <div class="column">
            <p>LIVE ONLINE</p>
            {#if artist.events.length}
              <div class="event-schedule" style="padding-bottom: 10px;">
                <ul>
                  {#each artist.events as event}
                    <li>
                      <a href="/schedule/" style="color: white;">
                        {event.title}
                      </a>
                      - {event.startTime}
                    </li>
                  {/each}
                </ul>
              </div>
            {/if}
            <div>
              <a href="../live" class="rounded-link bg-col-7">Watch Live</a>
              <a href="../schedule" class="rounded-link bg-col-7">
                Full Schedule
              </a>
            </div>
          </div>
          <div class="column">
            <p>ON SITE</p>
            <p>Goldsmiths, University of London</p>
            <p>St James Hatcham Building</p>
            <div>
              <a href="../getting-there" class="rounded-link bg-col-7">
                Getting There
              </a>
              <a href="../map" class="rounded-link bg-col-7">Map</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</section>

<section class="section bg-col-7 artists-section">
  <div class="container is-widescreen">

    <div class="content">
      <div class="columns">
        <div class="column is-one-third">

          <div
            class="bio-photo"
            style="background-image:url(img/bios/{artist.username}.jpeg)" />

          <!-- TODO not an ideal setup to be show / hiding bio on mobile versus desktop... to be resolved in the next iteration with artist work-->
          <div class="is-hidden-desktop is-hidden-tablet">
            <h2 class="artist-name">
              {artist.name}
              {#if artist.otherName}({artist.otherName}){/if}
            </h2>

            <div class="artist-bio">
              {#if artist.bioHTML}
                {@html artist.bioHTML}
              {:else}
                <p>No biography provided</p>
              {/if}
            </div>
          </div>

          <div class="social-links">
            <h3>Social links</h3>
            <SocialLink kind="website" value={artist.website} />
            <SocialLink kind="instagram" value={artist.instagram} />
            <SocialLink kind="twitter" value={artist.twitter} />
            <SocialLink kind="facebook" value={artist.facebook} />
            <SocialLink kind="vimeo" value={artist.vimeo} />
            <SocialLink kind="youtube" value={artist.youtube} />
            <SocialLink kind="twitch" value={artist.twitch} />
          </div>

          <!-- Display as a list? -->
          {#if artist.themes.length}
            <div class="content">
              <h6>Themes</h6>
              <ul>
                {#each artist.themes as theme}
                  <li>{theme}</li>
                {/each}
              </ul>
            </div>
          {/if}

          <!-- or display as tags? -->
          {#if artist.media.length}
            <h6>Media</h6>
            {#each artist.media as media}
              <span class="tag is-dark">{media}</span>
              &nbsp;
            {/each}
          {/if}

          {#if artist.events.length}
            <div class="event-schedule">
              <h3>Event schedule</h3>
              <ul>
                {#each artist.events as event}
                  <li>
                    <!-- How should we link to the schedule? give each event an ID? -->
                    <a href="/schedule/TODO">{event.title}</a>
                    <!-- How should we format date/times? by day? -->
                    - {event.startTime}
                  </li>
                {/each}
              </ul>
            </div>
          {/if}

        </div>
        <div class="column is-hidden-mobile is-two-thirds">
          <h2 class="artist-name">
            {artist.name}
            {#if artist.otherName}({artist.otherName}){/if}
          </h2>

          <div class="artist-bio">
            {#if artist.bioHTML}
              {@html artist.bioHTML}
            {:else}
              <p>No biography provided</p>
            {/if}
          </div>
        </div>
      </div>
    </div>
    <div style="padding-top: 100px;" />
  </div>
</section>
