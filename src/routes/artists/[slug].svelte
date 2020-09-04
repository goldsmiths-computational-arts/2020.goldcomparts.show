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

<style>
  .content{
    display: grid;
    justify-content: center;
    grid-template-columns: 400px auto;
    grid-template-rows: 50px 400px 10px ;
    grid-template-areas: "img name" "img bio" "links bio";
  }

  .artist-img{
    width: 400px;
    height: 400px;
    grid-area: img;
  }

  .artist-bio{
    padding-top: 50px;
    grid-area: bio;
    padding-left: 10px;
  }

  .social-links{
    grid-area: links;
    display: flex;
    flex-direction: column;
  }

  .artist-name{
    grid-area: name;
    padding-left: 10px;
  }

  @media screen and (max-width: 750px){
    .content{
      display: grid;
      grid-template-columns: 400px;
      grid-template-rows: 400px 50px auto ;
      grid-template-areas: "img" "name" "bio" "links";
    }

    .social-links{
      padding-top: 25px;
    }
  }
</style>

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
      <img class="artist-img" src="img/bios/{artist.username}.jpeg" alt={artist.name} />

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
    </div>
  </div>
  <div style="padding-top: 100px;"></div>
</section>