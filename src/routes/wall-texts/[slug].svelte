<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`/artists/${params.slug}.json`);
    const artist = await res.json();

    return { artist };
  }
</script>

<script>
  import { range } from "d3-array";
  import { slugify, formatDate, formatDay, formatTime } from "../../js/helpers";
  import SocialLink from "../../components/SocialLink.svelte";

  export let artist;
</script>

<style>
  /* To hide the regular bits of the site */
  :global(#gradient) {
    display: none;
  }
  :global(nav) {
    display: none !important;
  }

  .content {
    margin: 60px 100px;
    max-width: 800px;
  }

  h2 {
    font-weight: 500;
  }

  .wall-text {
    width: 440px;
  }

  .social {
    margin-top: 2em;
  }
</style>

<div class="content">

  <img
    style="float: right"
    width="100"
    src="/img/qr/{artist.username}.svg"
    alt="QR code link to user's page on website" />

  <h1 class="title">{artist.title}</h1>
  <h2 class="subtitle">
    {artist.name}
    {#if artist.otherName}({artist.otherName}){/if}
  </h2>

  <div class="wall-text">
    {@html artist.artworkHTML}
  </div>

  {#if artist.wallTextHTML || artist.interactiveUrl}
    <h3 class="subtitle">Instructions</h3>
    {#if artist.interactiveUrl}
      <p>
        <a href={artist.interactiveUrl}>{artist.interactiveUrl}</a>
      </p>
    {/if}
    {#if artist.wallTextHTML}
      <div class="wall-text">
        {@html artist.wallTextHTML}
      </div>
    {/if}
  {/if}

  <div class="social">

    <img
      style="float: right"
      width="200"
      src="/img/brand.svg"
      alt="Chimera Garden" />

    <SocialLink kind="website" value={artist.website} />
    <SocialLink kind="instagram" value={artist.instagram} />
    <SocialLink kind="twitter" value={artist.twitter} />
  </div>

</div>
