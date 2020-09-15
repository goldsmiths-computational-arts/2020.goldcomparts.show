<script>
  import { stores } from "@sapper/app";

  const { page } = stores();
  // $: console.log($page.path);

  let showMenu = false;

  let menuItems = [
    { label: "Artists", href: "/artists" },
    { label: "Artworks", href: "/artworks" },
    { label: "Schedule", href: "/schedule" },
    { label: "Live", href: "/live" },
    { label: "Getting There", href: "/getting-there" },
    { label: "Map", href: "/map" },
    { label: "About", href: "/about" }
  ];

  function toggleMenu() {
    showMenu = !showMenu;
  }

  function hideMenu() {
    showMenu = false;
  }
</script>

<style>
  nav {
    background-color: transparent;
  }

  a {
    font-family: futura-pt, sans-serif;
    font-weight: 600;
    font-size: 1.3rem;
    color: #fcfcfc;
    border-bottom: 4px solid transparent;
  }

  a.is-active {
    border-bottom-color: black;
    color: black;
  }

  @media only screen and (max-width: 1023px) {
    .navbar-menu {
      background-color: #387194;
    }
  }

  @media only screen and (min-width: 768px) {
    nav {
      padding-top: 20px;
    }
    .navbar-item img {
      margin-top: -10px;
      max-height: 2.3rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .navbar-item img {
      margin-left: -10px;
    }
  }
</style>

<nav
  class="navbar is-transparent"
  role="navigation"
  aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img
          src="/img/brand.svg"
          width="250"
          height="45"
          alt="Chimera Garden" />
      </a>

      <a
        href="#top"
        on:click={toggleMenu}
        role="button"
        class="navbar-burger burger"
        class:is-active={showMenu}
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" class:is-active={showMenu}>
      <div class="navbar-end">
        {#each menuItems as item}
          <a
            class="navbar-item"
            class:is-active={$page.path === item.href}
            href={item.href}
            on:click={hideMenu}>
            {item.label}
          </a>
        {/each}
      </div>
    </div>
  </div>
</nav>
