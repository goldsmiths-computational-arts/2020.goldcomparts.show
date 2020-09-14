<script>
  import { BASE_HOST } from "../js/constants";
</script>

<style>
  iframe {
    display: block;
  }

  .chat h2{
    margin-bottom: 0.2em;
  }

  iframe {
    width:100%;
  }

  .responsive-iframe{
    width: 100%;
    height: 0px;
    padding-bottom: 57%;
  }

  .responsive-iframe iframe {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .events-button-container{
    text-align: right;
  }

  @media screen and (max-width: 768px) {
    .events-button-container{
      text-align: left;
    }
  }


</style>

<svelte:head>
  <title>Live</title>
</svelte:head>

<!-- <section class="hero is-primary">
  <div class="hero-body">
    <div class="container page-max-width">
      <h1 class="title">Live</h1>
    </div>
  </div>
</section>
 -->


<div class="container page-max-width top-framed-element">
    <section>
      <div class="container">
        <div class="responsive-iframe">
          <iframe
            id="twitch-video"
            title="Twitch video stream"
            src="https://player.twitch.tv/?channel=goldsmiths_comparts&amp;parent={BASE_HOST}"
            frameborder="0"
            allowfullscreen="true"
            scrolling="no"
            height="500"
            width="900">
          </iframe>
        </div>
      </div>
    </section>
</div>


<section class="section bg-col-7">
  <div class="container page-max-width">

    <section class="chat">
      <div class="content">
        <div class="columns">
          <div class="column">
            <h2 class="subtitle">Live Broadcast</h2>
            <p>To join in our audience Q&A, you can use the chat below after signing up for a <a href="https://www.twitch.tv/signup" target="_blank">Twitch account</a>.
          </div>
          <div class="column events-button-container">
            <a href="/schedule" class="rounded-link col-2 bg-col-7">
              EVENTS SCHEDULE
            </a>
          </div>
        </div>
        <iframe
          id="twitch-chat"
          title="Twitch chat"
          src="https://www.twitch.tv/embed/goldsmiths_comparts/chat?parent={BASE_HOST}"
          height="500"
          width="900">
        </iframe>
      </div>
    </section>

  </div>
</section>