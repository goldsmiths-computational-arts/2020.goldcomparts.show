<script>
  import { stores } from "@sapper/app";
  const { page } = stores();

  import { BASE_URL } from "../js/constants";

  export let url = $page.path;
  export let title;
  export let description = "17-20 September 2020";
  export let image = "/img/social/facebook_1200x630.jpg";
  export let imageWidth = 1200;
  export let imageHeight = 630;
</script>

<title>{title}</title>
<meta property="og:title" content={title} />
<meta property="og:url" content={BASE_URL + url} />
<meta property="og:description" content={description} />
<meta property="og:image" content={BASE_URL + image} />
<meta property="og:image:width" content={imageWidth} />
<meta property="og:image:height" content={imageHeight} />
