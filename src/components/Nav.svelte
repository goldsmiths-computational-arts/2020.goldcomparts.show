<script>
  export let segment;
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="container">

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a
          class="navbar-item"
          aria-current={segment === 'about' ? 'page' : undefined}
          href=".">
          Home
        </a>

        <a class="navbar-item" href="artists">Artists</a>
      </div>
    </div>
  </div>
</nav>
