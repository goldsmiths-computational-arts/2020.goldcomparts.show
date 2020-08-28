<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`artists/${params.slug}.json`);
    const artist = await res.json();

    return { artist };
  }
</script>

<script>
  import { slugify } from "../../js/helpers.js";
  import SocialLink from "../../components/SocialLink.svelte";

  export let artist;
</script>

<svelte:head>
  <title>{artist.name} - Final Show - 2020</title>
</svelte:head>

<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">{artist.name}</h1>
      {#if artist.otherName}
        <h2 class="subtitle">{artist.otherName}</h2>
      {/if}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">

    <div class="content">
      <img src="img/bios/{artist.username}.jpeg" alt={artist.name} />

      <h2>
        {artist.name}
        {#if artist.otherName}({artist.otherName}){/if}
      </h2>

      {#if artist.bioHTML}
        {@html artist.bioHTML}
      {:else}
        <p>No biography provided</p>
      {/if}

      <h3>Social links</h3>
      <SocialLink kind="website" value={artist.website} />
      <SocialLink kind="instagram" value={artist.instagram} />
      <SocialLink kind="twitter" value={artist.twitter} />
      <SocialLink kind="facebook" value={artist.facebook} />
    </div>
  </div>
</section>
