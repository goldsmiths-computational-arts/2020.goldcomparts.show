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

  /*You can move this slidewshow styling into separate css file if you like, jsut moving quickly here */

    /**{box-sizing: border-box; -webkit-box-sizing: border-box; }*/
    /*html, body { height: 100%; }*/
    /*body { margin: 0; font: 16px/1.3 sans-serif; }*/

    /*
    PURE RESPONSIVE CSS3 SLIDESHOW GALLERY by Roko C. buljan
    http://stackoverflow.com/a/34696029/383904
    */

    .CSSgal {
      position: relative;
      overflow: hidden;
      height: 100%; /* Or set a fixed height */
    }

    /* SLIDER */

    .CSSgal .slider {
      height: 100%;
      white-space: nowrap;
      font-size: 0;
      transition: 0.8s;
    }

    /* SLIDES */

    .CSSgal .slider > * {
      /*font-size: 1rem;*/
      display: inline-block;
      white-space: normal;
      vertical-align: top;
      height: 100%;
      width: 100%;
      background: none 50% no-repeat;
      background-size: cover;
    }

    /* PREV/NEXT, CONTAINERS & ANCHORS */

    .CSSgal .prevNext {
      position: absolute;
      z-index: 1;
      top: 50%;
      width: 100%;
      height: 0;
    }

    .CSSgal .prevNext > div+div {
      visibility: hidden; /* Hide all but first P/N container */
    }

    .CSSgal .prevNext a {
      background: #fff;
      position: absolute;
      width:       60px;
      height:      60px;
      line-height: 60px; /* If you want to place numbers */
      text-align: center;
      opacity: 0.7;
      -webkit-transition: 0.3s;
              transition: 0.3s;
      -webkit-transform: translateY(-50%);
              transform: translateY(-50%);
      left: 0;
    }
    .CSSgal .prevNext a:hover {
      opacity: 1;
    }
    .CSSgal .prevNext a+a {
      left: auto;
      right: 0;
    }

    /* NAVIGATION */

    .CSSgal .bullets {
      position: absolute;
      z-index: 2;
      bottom: 0;
      padding: 10px 0;
      width: 100%;
      text-align: center;
    }
    .CSSgal .bullets > a {
      display: inline-block;
      width:       30px;
      height:      30px;
      line-height: 30px;
      text-decoration: none;
      text-align: center;
      background: rgba(255, 255, 255, 1);
      -webkit-transition: 0.3s;
              transition: 0.3s;
    }
    .CSSgal .bullets > a+a {
      background: rgba(255, 255, 255, 0.5); /* Dim all but first */
    }
    .CSSgal .bullets > a:hover {
      background: rgba(255, 255, 255, 0.7) !important;
    }

    /* NAVIGATION BUTTONS */
    /* ALL: */
    .CSSgal >s:target ~ .bullets >* {      background: rgba(255, 255, 255, 0.5);}
    /* ACTIVE */
    #s0:target ~ .bullets >*:nth-child(1) {background: rgba(255, 255, 255,   1);}
    #s1:target ~ .bullets >*:nth-child(2) {background: rgba(255, 255, 255,   1);}
    #s2:target ~ .bullets >*:nth-child(3) {background: rgba(255, 255, 255,   1);}
    #s3:target ~ .bullets >*:nth-child(4) {background: rgba(255, 255, 255,   1);}
    #s4:target ~ .bullets >*:nth-child(5) {background: rgba(255, 255, 255,   1);}
    /* More slides? Add here more rules */

    /* PREV/NEXT CONTAINERS VISIBILITY */
    /* ALL: */
    .CSSgal >s:target ~ .prevNext >* {      visibility: hidden;}
    /* ACTIVE: */
    #s0:target ~ .prevNext >*:nth-child(1) {visibility: visible;}
    #s1:target ~ .prevNext >*:nth-child(2) {visibility: visible;}
    #s2:target ~ .prevNext >*:nth-child(3) {visibility: visible;}
    #s3:target ~ .prevNext >*:nth-child(4) {visibility: visible;}
    #s4:target ~ .prevNext >*:nth-child(5) {visibility: visible;}
    /* More slides? Add here more rules */

    /* SLIDER ANIMATION POSITIONS */

    #s0:target ~ .slider {transform: translateX(   0%); -webkit-transform: translateX(   0%);}
    #s1:target ~ .slider {transform: translateX(-100%); -webkit-transform: translateX(-100%);}
    #s2:target ~ .slider {transform: translateX(-200%); -webkit-transform: translateX(-200%);}
    #s3:target ~ .slider {transform: translateX(-300%); -webkit-transform: translateX(-300%);}
    #s4:target ~ .slider {transform: translateX(-400%); -webkit-transform: translateX(-400%);}
    /* More slides? Add here more rules */


    /* YOU'RE THE DESIGNER! 
       ____________________
       All above was mainly to get it working :)
       CSSgal CUSTOM STYLES / OVERRIDES HERE: */

    .CSSgal{
      color: #fff;  
      text-align: center;
    }
    .CSSgal .slider h2 {
      margin-top: 40vh;
      font-weight: 200;
      letter-spacing: -0.06em;
      word-spacing: 0.2em;
      font-size: 3em;
    }
    .CSSgal a {
      border-radius: 50%;
      margin: 0 3px;
      color: rgba(0,0,0,0.8);
      text-decoration: none;
    }








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

  .top-framed-element{
    margin-bottom: -60px;
    z-index: 20;
  }

  .section.responsive-video{
    padding-left: 0px;
    padding-right: 0px;
  }

  .artwork-instructions{
    margin: 60px 0px 20px 0px;
  }

  .section.responsive-video .video-sizer{
    width: 100%;
    height: 0px;
    padding-bottom: 57%;
  }

  .section.responsive-video iframe{
    width:100%;
    height: 100%;
    position: absolute;
  }

  .artist-tags{
    margin-top: 20px;
  }

  .artist-tags .tag{
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


    

    {#if artworkImages.length > 1}





        <div class="CSSgal">

          <!-- Don't wrap targets in parent -->
<!--           <s id="s1"></s> 
          <s id="s2"></s>
          <s id="s3"></s>
          <s id="s4"></s> -->

          {#each artworkImages as image, i}
            <s id="s{i}"></s> 
          {/each}


          <div class="slider">

             {#each artworkImages as image, i}
              <div style="background:#a6a8ab;">
                 <img src={image} alt="" />
              </div>
            {/each}

          </div>
          

          <!-- TODO Nice to have fix the styling for the next and previous arrows -->

<!--           <div class="prevNext">

            {#each artworkImages as image, i}

              {#if i == 0}
                <div><a href="artists/{slugify(artist.name)}/#s{artworkImages.length-1}"></a><a href="artists/{slugify(artist.name)}/#s{i+1}"></a></div>
              {:else if i == artworkImages-1}
                <div><a href="artists/{slugify(artist.name)}/#s{i-1}"></a><a href="artists/{slugify(artist.name)}/#s0"></a></div>
              {:else}
                <div><a href="artists/{slugify(artist.name)}/#s{i-1}"></a><a href="artists/{slugify(artist.name)}/#s{i+1}"></a></div>
              {/if}

            {/each}

          </div> -->

          <div class="bullets">

            {#each artworkImages as image, i}
              <a href="artists/{slugify(artist.name)}/#s{i}">{i+1}</a>
            {/each}

          </div>

        </div>



    {:else}
      {#each artworkImages as image}
        <img src={image} alt="" />
      {/each}
    {/if}
    


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
            <a href={artist.interactiveUrl} target="_blank" class="rounded-link bg-col-1 bd-col-1 col-7">
              See the work
            </a>
          {/if}

          <!-- TODO if there is time embed stream channels do an embed? -->

          {#if artist.streamTwitch}  
            <a href={"https://www.twitch.tv/"+artist.streamTwitch} target="_blank" class="rounded-link bg-col-1 bd-col-1 col-7">
              Watch twitch stream
            </a>
          {/if}
          {#if artist.streamYouTube}
            <a href={"https://www.youtube.com/channel/"+artist.streamYouTube} target="_blank" class="rounded-link bg-col-1 bd-col-1 col-7">
              Watch youtube stream
            </a>
          {/if}
          <br />
          <div>

          </div>
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
              src="{artist.videoDocUrl}" 
              height="500"
              width="900"
              frameborder="0" 
              allow="autoplay" 
              allowfullscreen>
              </iframe>
            </div>
      
        </div>
      </section>

    {/if}


    <!-- TODO:  Start if > Once logic for remote students is in  we can only show this blue block if events online and if in church -->


      <section class="section bg-col-2 col-6">
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
                                <a href="/schedule/" style="color: white;">  <!-- TODO Nice to have if we don't scroll to the event can we have online events and day preselected when you arrive at schedule page -->
                                  {event.title}
                                </a>
                                - {event.startTime}  <!--  TODO can we have this a bit more human readable so date and start time -->
                              </li>
                           {/if}
                        {/each}
                      </ul>
                    </div>
              </div>
            {/if}

            <!-- TODO:  Need logic to hide this column if student is only showing remotely -->

            <div class="column">
              <p>ON SITE</p>
              <p>Goldsmiths, University of London<br/>
              St James Hatcham Building</p>
              {#if artist.events.length}
                <div class="event-schedule" style="padding-bottom: 10px;">
                  <ul>
                    {#each artist.events as event}
                       {#if event.livestream != 'true' && event.physical == 'yes'}
                          <li>
                            <a href="/schedule/" style="color: white;"><!-- TODO Nice to have if we don't scroll to the event can we have onsite events and day preselected when you arrive at schedule page -->
                              {event.title}
                            </a>
                            - {event.startTime}
                          </li>
                       {/if}
                    {/each}
                  </ul>
                </div>
              {/if}

            </div>
          </div>
          <div class="columns">

            {#if artist.events.length}
              <div class="column">
                <div>
                  <!-- <a href="../live" class="rounded-link bg-col-7">Watch Live</a> --> <!-- TODO on Tues/Wednesday add in once live page is live -->
                  <a href="../schedule" class="rounded-link bg-col-7 bd-col-7 col-2">
                    Full Schedule
                  </a>
                </div>
              </div>
            {/if}


            <!-- TODO:  Need logic to hide this column if student is only showing remotely -->

            <div class="column">
              <div>
                <a href="../getting-there" class="rounded-link bg-col-7 bd-col-7 col-2">
                  Getting There
                </a>
                <!-- <a href="../map" class="rounded-link bg-col-7 bd-col-7 col-2">Map</a> -->  <!--  TODO when we have a map layyout -->
              </div>
            </div>
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
