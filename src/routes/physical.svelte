<svelte:head>
  <title>Physical</title>
</svelte:head>

<style>
  p{
    padding: 5px 0px;
  }
  ul{
    padding: 7px 0px;
  }
  h2{
    padding: 5px 0px;
  }
  .main{
    margin-right: 75px;
    margin-left: 75px;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 400px 320px 320px;
    grid-template-areas: "church visit"  "cvd cvd" "trnspt trnspt";
  }

  .section-title{
    font-size: 25px;
    color: black;
    font-weight: 350;
  }

  .hatcham{
    padding-top: 20px;
    grid-area: church;
  }

  .transport{
    grid-area: trnspt;
  }

  .covid{
    grid-area: cvd;
  }

  .visit-us{
    padding-left: 10px; 
    padding-top: 20px;
    grid-area: visit;
  }

  .visit-us ul{
    list-style-type: square;
    margin-left: 20px;
  }

  .covid ul{
    list-style-type: square;
    margin-left: 20px;
  }
</style>

<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">How to find us</h1>
    </div>
  </div>
</section>

<section class="main">
  <section class="visit-us">
    <h2 class="section-title">Visiting the exhibition in person</h2>
    <p>
      To manage capacity all visitors must register to 
      attend during a slot via 
      <a href="https://www.eventbrite.co.uk/e/chimera-garden-the-computational-arts-mamfa-degree-show-goldsmiths-tickets-119513047743">this Eventbrite</a>. 
      Please arrive at the beginning of your time slot, but please 
      be aware we have limited capacity inside the venue, 
      you may be asked to queue until space inside becomes available.
    </p>
    <p>Opening Hours</p>
    <ul>
      <li style="">Thursday 17th: 16:30-21:30</li>
      <li>Friday 18th: 11:00-21:30</li>
      <li>Saturday 19th: 11:00-21:30</li>
      <li>Sunday 20th: 11:00-18:00</li>
    </ul>
  </section>

  <section class="hatcham">
    <h2 class="section-title">How to get here</h2>
    <p>Goldsmiths is in New Cross, South East London, five miles from central London.</p>
    <ul>
      <li>St. James Hatcham Building</li>
      <li>25 St James's</li>
      <li>Goldsmiths, University of London</li>
      <li>New Cross</li>
      <li>London SE14 6AD</li>
    </ul>
    <p>
      When visiting St. James Hatcham Building, turn off New Cross road and 
      walk up St James. The St James Hatcham Building is the <strong>church</strong> 
      at the end of the road.
    </p>
    <p>For more information <a href="https://www.gold.ac.uk/find-us/places/st-james-hatcham-building/">click here</a>.</p>
  </section>

  <section class="transport">
    <h2 class="section-title">Public Transport</h2>
    <p>
      The following buses stop outside Goldsmiths: 
      21, 36, 53, 136, 171, 172, 177, 225, 321, 343, 436 and 453.
    </p>
    <p>
      Goldsmiths is less than five minutes’ 
      walk from both New Cross and New Cross Gate 
      railway and overground stations.
    </p>
  </section>

  <section class="covid">
  <h2 class="section-title">COVID Guidance</h2>
  <p>
    It is important to us that visitors and staff feel safe and comfortable in the 
    exhibition. To this end we are taking a number of precautions. 
    Please do follow the guidelines below to ensure you have a 
    safe and pleasant visit:
  </p>
    <ul>
      <li>We have limited capacity inside the venue. 
        You may be asked to queue until space inside becomes available.</li>
      <li>Masks are required when indoors, unless you are exempt</li>
      <li>You are encouraged to bring your own wired headphones to listen to exhibits</li>
      <li>Please maintain 2m distance to other guests where possible</li>
      <li>There will be sanitisation stations throughout the exhibition, 
        exits, entrances and at interactive pieces</li>
      <li>No refreshments will be permitted inside the venue</li>
      <li>On the opening night (Thursday 17th), there will be outdoor space and bar 
        available to socialise, maintaining social distancing.</li>
    </ul>
  </section>
</section>