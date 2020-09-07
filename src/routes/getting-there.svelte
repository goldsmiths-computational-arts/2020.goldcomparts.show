<script>
  import { REGISTER_URL } from "../js/constants";
</script>

<style>
  table td {
    padding-right: 2em;
  }

  .gmap {
    display: block;
  }
</style>

<svelte:head>
  <title>Getting there</title>
</svelte:head>

<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Getting to the exhibition</h1>
    </div>
  </div>
</section>

<div class="container">
  <iframe
    class="gmap"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d621.2849271162139!2d-0.03870997075277533!3d51.47394983406136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603cdd0976f5b%3A0x370a516c5d8f1902!2sSt%20James%20Hatcham%20building%2C%20Goldsmiths%20University%20of%20London!5e0!3m2!1sen!2suk!4v1599344161499!5m2!1sen!2suk"
    width="100%"
    height="500"
    frameborder="0"
    style="border:0;"
    allowfullscreen=""
    aria-hidden="false"
    tabindex="0"
    title="Map" />

</div>

<section class="section bg-col-2">
  <div class="container is-widescreen">

    <div class="columns">

      <div class="column">
        <h2 class="subtitle">Location</h2>
        St. James Hatcham Building
        <br />
        25 St James's
        <br />
        Goldsmiths, University of London
        <br />
        New Cross
        <br />
        London SE14 6AD
        <br />

      </div>
      <div class="column">

        <h2 class="subtitle">Opening Hours</h2>

        <table>
          <tr>
            <td>Opening night Thursday 17th</td>
            <td>5 pm - 9.30 pm</td>
          </tr>
          <tr>
            <td>Friday 18th - Saturday 19th</td>
            <td>11 am - 9.30 pm</td>
          </tr>
          <tr>
            <td>Sunday 20th</td>
            <td>11 am - 6 pm</td>
          </tr>
        </table>

        <p>Limited capacity, registration mandatory</p>
      </div>
    </div>
  </div>
</section>

<section class="section bg-col-7">
  <div class="container">
    <h2 class="subtitle">How to visit the exhibition in person</h2>
    To manage capacity all visitors must register to attend during a slot via
    this Eventbrite. Please arrive at the beginning of your time slot, but
    please be aware we have limited capacity inside the venue, you may be asked
    to queue until space inside becomes available.
    <div>
      <a class="rounded-link bg-col-3" href={REGISTER_URL}>Register</a>
    </div>
  </div>
</section>

<section class="section is-white">
  <div class="container is-widescreen">

    <div class="columns">

      <div class="column">
        <h1 class="title">Visiting the exhibition in person</h1>
        <div class="content">
          <p>
            To manage capacity all visitors must register to attend during a
            slot via
            <a
              href="https://www.eventbrite.co.uk/e/chimera-garden-the-computational-arts-mamfa-degree-show-goldsmiths-tickets-119513047743">
              this Eventbrite
            </a>
            . Please arrive at the beginning of your time slot, but please be
            aware we have limited capacity inside the venue, you may be asked to
            queue until space inside becomes available.
          </p>
          <h2 class="subtitle">Opening Hours</h2>
          <ul>
            <li style="">Thursday 17th: 16:30-21:30</li>
            <li>Friday 18th: 11:00-21:30</li>
            <li>Saturday 19th: 11:00-21:30</li>
            <li>Sunday 20th: 11:00-18:00</li>
          </ul>
        </div>
      </div>

      <div class="column">
        <div class="content">
          <h2 class="subtitle">How to get here</h2>
          <p>
            Goldsmiths is in New Cross, South East London, five miles from
            central London.
          </p>
          <ul>
            <li>St. James Hatcham Building</li>
            <li>25 St James's</li>
            <li>Goldsmiths, University of London</li>
            <li>New Cross</li>
            <li>London SE14 6AD</li>
          </ul>
          <p>
            When visiting St. James Hatcham Building, turn off New Cross road
            and walk up St James. The St James Hatcham Building is the
            <strong>church</strong>
            at the end of the road.
          </p>
          <p>
            For more information
            <a
              href="https://www.gold.ac.uk/find-us/places/st-james-hatcham-building/">
              click here
            </a>
            .
          </p>

          <h2 class="subtitle">Public Transport</h2>
          <p>
            The following buses stop outside Goldsmiths: 21, 36, 53, 136, 171,
            172, 177, 225, 321, 343, 436 and 453.
          </p>
          <p>
            Goldsmiths is less than five minutes’ walk from both New Cross and
            New Cross Gate railway and overground stations.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>

<section class="section is-white">
  <div class="container">
    <h1 class="title">COVID Guidance</h1>
    <h2 class="subtitle">
      A simple container to divide your page into
      <strong>sections</strong>
      , like the one you're currently reading
    </h2>
    <div class="content">
      <p>
        It is important to us that visitors and staff feel safe and comfortable
        in the exhibition. To this end we are taking a number of precautions.
        Please do follow the guidelines below to ensure you have a safe and
        pleasant visit:
      </p>
      <ul>
        <li>
          We have limited capacity inside the venue. You may be asked to queue
          until space inside becomes available.
        </li>
        <li>Masks are required when indoors, unless you are exempt</li>
        <li>
          You are encouraged to bring your own wired headphones to listen to
          exhibits
        </li>
        <li>Please maintain 2m distance to other guests where possible</li>
        <li>
          There will be sanitisation stations throughout the exhibition, exits,
          entrances and at interactive pieces
        </li>
        <li>No refreshments will be permitted inside the venue</li>
        <li>
          On the opening night (Thursday 17th), there will be outdoor space and
          bar available to socialise, maintaining social distancing.
        </li>
      </ul>

    </div>
  </div>
</section>
