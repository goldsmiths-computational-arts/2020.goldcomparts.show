<script>
  import { BASE_HOST } from "../js/constants";
</script>

<style>
  iframe {
    display: block;
  }

  .chat {
    margin-top: 4em;
  }
</style>

<svelte:head>
  <title>Live</title>
</svelte:head>

<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Live</h1>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <iframe
      id="twitch-video"
      title="Twitch video stream"
      src="https://player.twitch.tv/?channel=goldsmiths_comparts&amp;parent={BASE_HOST}"
      frameborder="0"
      allowfullscreen="true"
      scrolling="no"
      height="500"
      width="900" />
  </div>
</section>

<section class="chat">
  <div class="container">
    <h2 class="subtitle">Chat stream</h2>

    <iframe
      id="twitch-chat"
      title="Twitch chat"
      src="https://www.twitch.tv/embed/goldsmiths_comparts/chat?parent={BASE_HOST}"
      height="500"
      width="900" />
  </div>
</section>
