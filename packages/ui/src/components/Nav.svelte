<script lang="ts">
  import Button from "./Button.svelte";

  let isOpenNav = false;
  const toggleNavigation = () => {
    isOpenNav = !isOpenNav;
  };
</script>

<div class="navigation-container">
  <Button fullWidth on:click={toggleNavigation}>Get a login</Button>
  <nav class="navigation" class:open-navigation={isOpenNav}><slot></slot></nav>
</div>

<style>
  .navigation-container {
    position: relative;
    width: 100vw;
    padding: 0.625rem 1.25rem;
  }
  .navigation:not(.open-navigation) {
    display: none;
  }

  .navigation {
    position: fixed;
    background-color: var(--background-color);
    height: calc(100vh - 2.5rem);
    width: calc(100vw - 5rem);
    max-width: var(--sidebar-width);
    top: 1.25rem;
    left: 50%;
    transform: translate(-50%, 0);
    transition: 0.3s;
    box-shadow:
      0 0 0 100vw var(--secondary-color-400),
      0 0 0.93rem -0.18rem var(--secondary-color-300);
    border-radius: 0.31rem;
    z-index: 200;
  }

  @media screen and (min-width: 768px) {
    .navigation-container {
      position: fixed;
      height: 100vh;
      box-shadow: 0.0625rem 0 0 var(--secondary-color-200);
      overflow-y: auto;
      overflow-x: hidden;
      width: fit-content;
      top: 0;
      left: 0;
      padding: 0;
    }

    :global(.navigation-container > button) {
      display: none !important;
    }

    .navigation,
    .navigation:not(.open-navigation) {
      position: static;
      display: block;
      border-radius: 0;
      box-shadow: none;
      transform: none;
      transition: 0s;
      height: 100%;
    }
  }
</style>
