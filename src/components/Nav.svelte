<script>
  import { stores } from "@sapper/app";

  const { page } = stores();

  $: console.log($page.path);

  let showMenu = false;

  let menuItems = [
    { label: "Home", href: "/" },
    { label: "Artists", href: "/artists" },
    { label: "Events", href: "/events" },
    { label: "Physical", href: "/physical" }
  ];

  function toggleMenu() {
    showMenu = !showMenu;
  }

  function hideMenu() {
    showMenu = false;
  }
</script>

<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <!-- JB - This is for Mobile really, we need a small version of the logo, we could hide it on desktop -->
    <a class="navbar-item" href=".">Chimera Garden</a>

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
</nav>
