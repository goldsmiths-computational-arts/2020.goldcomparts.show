<script>
  import { trackEvent } from "../js/helpers";
  export let kind;
  export let value;

  let icon;
  let url;
  let text;

  switch (kind) {
    case "website":
      // icon = `<span class="icon"><i class="fas fa-external-link-alt"></i></span>`;
      icon = `<span class="icon"><i class="fas fa-external-link-square-alt"></i></span>`;
      url = value;
      text = value;
      break;
    case "instagram":
      icon = `<span class="icon"><i class="fab fa-instagram"></i></span>`;
      url = `https://instagram.com/${value}`;
      text = `@${value}`;
      break;
    case "twitter":
      icon = `<span class="icon"><i class="fab fa-twitter"></i></span>`;
      url = `https://twitter.com/${value}`;
      text = `@${value}`;
      break;
    case "facebook":
      icon = `<span class="icon"><i class="fab fa-facebook"></i></span>`;
      url = `https://www.facebook.com/${value}`;
      text = url;
      break;
    case "twitch":
      icon = `<span class="icon"><i class="fab fa-twitch"></i></span>`;
      url = `https://www.twitch.com/${value}`;
      text = url;
      break;
    case "youtube":
      icon = `<span class="icon"><i class="fab fa-youtube"></i></span>`;
      url = `https://www.youtube.com/channel/${value}`;
      text = "YouTube Channel"; // YouTube doesn't seem to have nice urls for channels
      break;
    case "vimeo":
      icon = `<span class="icon"><i class="fab fa-vimeo"></i></span>`;
      url = `https://www.vimeo.com/${value}`;
      text = url;
      break;

    default:
      throw new Error(`Unknown social kind ${kind}`);
      break;
  }
</script>

<style>
  a{
    color:#387194;
  }
</style>

{#if value}
  <div class="social-profile">
    {@html icon}
    <a
      href={url}
      target="_blank"
      on:click={() => trackEvent('social', 'click', `${kind}.${value}`)}>
      {text}
    </a>
  </div>
{/if}
