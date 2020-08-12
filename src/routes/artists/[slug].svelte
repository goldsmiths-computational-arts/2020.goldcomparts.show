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
  <title>{artist.artist} - Final Show - 2020</title>
</svelte:head>

<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">{artist.artist}</h1>
      <h2 class="subtitle">{artist.title}</h2>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">

    <div class="content">
      <img src="https://i.imgur.com/{artist.imgur}.png" alt={artist.title} />
      <h2 class="subtitle">{artist.title}</h2>
      <p>{artist.desc}</p>
    </div>

    <div class="content">
      <h3>Performances</h3>
      <ul>
        <li>13:00 - Twitch stream?</li>
      </ul>

      <h3>Bio</h3>
      <div class="content">
        <p>Bio...</p>
      </div>

      <h3>Social linksa</h3>
      <SocialLink kind="instagram" value={artist.instagram} />
      <SocialLink kind="twitter" value={artist.twitter} />
      <SocialLink kind="facebook" value={artist.facebook} />
      <SocialLink kind="website" value={artist.website} />
    </div>
  </div>
</section>
