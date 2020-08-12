<script>
  export let segment;
</script>

<style>
  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

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
