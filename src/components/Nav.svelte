<script>
  import { stores } from "@sapper/app";

  const { page } = stores();

  $: console.log($page.path);

  let showMenu = false;

  let menuItems = [
    { label: "Artists", href: "/artists" },
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
    padding-left: 40px;
  }

  a {
    font-family: futura-pt, sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    color: #fcfcfc;
  }

  a.is-active {
    border-bottom: 4px solid black;
  }
</style>

<nav
  class="navbar is-transparent"
  role="navigation"
  aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <!-- JB - This is for Mobile really, we need a small version of the logo, we could hide it on desktop -->
      <!-- <a class="navbar-item desktop-display-none" href=".">Chimera Garden</a> -->
      <a class="navbar-item desktop-display-none" href="/">
        <img
          src="/img/brand.svg"
          width="200"
          height="30"
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
      <div class="navbar-start">
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
