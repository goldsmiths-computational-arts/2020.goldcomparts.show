<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`artists/${params.slug}.json`);
    const artist = await res.json();

    return { artist };
  }
</script>

<script>
  import { range } from "d3-array";
  import { slugify, formatFullTime } from "../../js/helpers";
  import SocialLink from "../../components/SocialLink.svelte";
  import Slideshow from "../../components/Slideshow.svelte";

  export let artist;

  $: {
    artist.events.forEach(event => {
      event.startsAt = new Date(event.startTime);
    });
  }

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

  a:not(.rounded-link) {
    color: #387194;
  }

  .artists-section {
    min-height: 100vh;
  }

  .content ul {
    list-style: none;
    margin-left: 0em;
  }

  .top-framed-element {
    margin-bottom: -60px;
    z-index: 20;
  }

  .section.responsive-video {
    padding-left: 0px;
    padding-right: 0px;
  }

  .artwork-instructions {
    margin: 60px 0px 20px 0px;
  }

  .section.responsive-video .video-sizer {
    width: 100%;
    height: 0px;
    padding-bottom: 57%;
  }

  .section.responsive-video iframe {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .artist-tags {
    margin-top: 20px;
  }

  .artist-tags .tag {
    margin: 2px 0px;
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

<div class="container page-max-width top-framed-element">
  <Slideshow images={artworkImages} />
</div>

<section class="section bg-col-7">
  <div class="container page-max-width">

    <div class="content">
      <section class="section bg-col-7">
        <div class="container align-center">
          <h2 class="artwork-title">{artist.title}</h2>
          <h3>
            {artist.name}
            {#if artist.otherName}({artist.otherName}){/if}
          </h3>
          <div class="artwork-desc">
            {#if artist.artworkHTML}
              {@html artist.artworkHTML}
            {/if}
          </div>

          {#if artist.webInstructionsHTML}
            <div class="artwork-instructions">
              <h3>How to interact</h3>
              {@html artist.webInstructionsHTML}
            </div>
          {/if}

          {#if artist.interactiveUrl}
            <a
              href={artist.interactiveUrl}
              target="_blank"
              class="rounded-link bg-col-1 bd-col-1 col-7">
              See the work
            </a>
          {/if}

          <!-- TODO if there is time embed stream channels do an embed? -->

          {#if artist.streamTwitch}
            <a
              href={'https://www.twitch.tv/' + artist.streamTwitch}
              target="_blank"
              class="rounded-link bg-col-1 bd-col-1 col-7">
              Watch twitch stream
            </a>
          {/if}

          {#if artist.streamYouTube}
            <a
              href={'https://www.youtube.com/channel/' + artist.streamYouTube}
              target="_blank"
              class="rounded-link bg-col-1 bd-col-1 col-7">
              Watch youtube stream
            </a>
          {/if}
          <br />
          <div />
        </div>
      </section>

      {#if artist.videoDocUrl}
        <section class="section responsive-video">
          <div class="container">

            <!-- TODO: The video doc urls need to be cleaned up, for Vimeo grab the video id from end of string -->

            <!-- Supplied format -->
            <!-- https://vimeo.com/456355806 -->

            <!-- Correct vimeo format : -->
            <!-- Something like this in a script / helper to be used something like this below: -->

            <!-- https://player.vimeo.com/video/456355806-->

            <!-- Supplied format -->
            <!-- https://youtu.be/W1mQymdvlu0 -->

            <!-- Something like this in a script / helper to be used something like this below: -->

            <!-- Correct youtube embed format : -->
            <!-- https://www.youtube.com/embed/W1mQymdvlu0 -->

            <div class="video-sizer">
              <iframe
                title="Documentation video"
                src={artist.videoDocUrl}
                height="500"
                width="900"
                frameborder="0"
                allow="autoplay"
                allowfullscreen />
            </div>

          </div>
        </section>
      {/if}

      <!-- TODO:  Start if > Once logic for remote students is in  we can only show this blue block if events online and if in church -->

      <section
        class="section bg-col-2 col-6"
        class:remote-only={artist.isRemote}>
        <div class="container see-more">
          <h2>Want to see more?</h2>
          <div class="columns">
            {#if artist.events.length}
              <div class="column">
                <p>LIVE ONLINE</p>
                <div class="event-schedule" style="padding-bottom: 10px;">
                  <ul>
                    {#each artist.events as event}
                      {#if event.livestream == true}
                        <li>
                          <a href="/schedule#{event.id}" style="color: white;">
                            {event.title}
                          </a>
                          - {formatFullTime(event.startsAt)}
                        </li>
                      {/if}
                    {/each}
                  </ul>
                </div>
              </div>
            {/if}

            {#if artist.isRemote}
              <div class="column">
                <p>ON SITE</p>
                <p>
                  Goldsmiths, University of London
                  <br />
                  St James Hatcham Building
                </p>
                {#if artist.events.length}
                  <div class="event-schedule" style="padding-bottom: 10px;">
                    <ul>
                      {#each artist.events as event}
                        {#if event.livestream != 'true' && event.physical == 'yes'}
                          <li>
                            <a
                              href="/schedule#{event.id}"
                              style="color: white;">
                              {event.title}
                            </a>
                            - {formatFullTime(event.startsAt)}
                          </li>
                        {/if}
                      {/each}
                    </ul>
                  </div>
                {/if}
              </div>
            {/if}

          </div>
          <div class="columns">

            {#if artist.events.length}
              <div class="column">
                <div>
                  <!-- <a href="../live" class="rounded-link bg-col-7">Watch Live</a> -->
                  <!-- TODO on Tues/Wednesday add in once live page is live -->
                  <a
                    href="../schedule"
                    class="rounded-link bg-col-7 bd-col-7 col-2">
                    Full Schedule
                  </a>
                </div>
              </div>
            {/if}

            {#if artist.isRemote}
              <div class="column">
                <div>
                  <a
                    href="../getting-there"
                    class="rounded-link bg-col-7 bd-col-7 col-2">
                    Getting There
                  </a>
                  <!-- <a href="../map" class="rounded-link bg-col-7 bd-col-7 col-2">Map</a> -->
                  <!--  TODO when we have a map layyout -->
                </div>
              </div>
            {/if}
          </div>
        </div>
      </section>
    </div>

  </div>
</section>

<!-- TODO:  End if  -> Once logic for remote students is in  we can only show this blue block if events online and if in church -->

<section class="section bg-col-7 artists-section">
  <div class="container page-max-width">

    <div class="content">
      <div class="columns">
        <div class="column is-one-third">

          <div
            class="bio-photo"
            style="background-image:url(img/bios/{artist.username}.jpeg)" />

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

          {#if artist.website || artist.instagram || artist.twitter || artist.facebook || artist.vimeo || artist.youtube || artist.twitch}
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
          {/if}

          <!-- or display as tags? -->
          {#if artist.themes.length || artist.media.length}
            <div class="artist-tags">
              <h6>Tags</h6>
              {#if artist.themes.length}
                {#each artist.themes as theme}
                  <span class="tag is-dark">{theme}</span>
                  &nbsp;
                {/each}
              {/if}

              {#if artist.media.length}
                {#each artist.media as media}
                  <span class="tag is-dark">{media}</span>
                  &nbsp;
                {/each}
              {/if}

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
