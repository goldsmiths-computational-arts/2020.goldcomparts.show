<script>
  import { onMount } from "svelte";
  import Nav from "../components/Nav.svelte";
  import { tracking } from "./js/tracking";

  onMount(() => {
    tracking();
  });
</script>

<style>
  #gradient {
    position: fixed;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background: rgb(88, 164, 154);
    background: radial-gradient(
      circle at bottom right,
      rgba(88, 164, 154, 1) 0%,
      rgba(251, 169, 67, 1) 53%,
      rgba(252, 118, 77, 1) 100%
    );
  }
</style>

<div id="gradient" />

<main>
  <Nav />
  <slot />
</main>
