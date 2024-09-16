<script lang="ts">
  import { clickOutside } from "../utils/clickOutside";
  import Button from "./Button.svelte";
  import Chevron from "./Icon/Chevron.svelte";
  import Close from "./Icon/Close.svelte";

  let isOpenNav = false;
  const toggleNavigation = () => {
    isOpenNav = !isOpenNav;
  };

  const handleClickOutside = () => {
    if (isOpenNav) {
      toggleNavigation();
    }
  };
</script>

<div class="navigation-container">
  <Button
    fullWidth
    on:click={toggleNavigation}
    icon={!isOpenNav ? Chevron : Close}
    iconProps={!isOpenNav ? { variant: "up-down" } : {}}
    >Get a list of users</Button
  >
  <nav
    class="navigation"
    class:open-navigation={isOpenNav}
    use:clickOutside
    on:click_outside={handleClickOutside}
  >
    <slot></slot>
  </nav>
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

  :global(.navigation-container:has(.open-navigation) > button) {
    pointer-events: none;
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
    -webkit-transition: 0.3s;
    transition: 0.3s;
    box-shadow:
      0 0 0 100vw var(--secondary-color-400),
      0 0 0.93rem -0.18rem var(--secondary-color-300);
    border-radius: 0.31rem;
    z-index: 200;
  }

  @media screen and (min-width: 768px) {
    .navigation-container {
      position: sticky;
      height: 100vh;
      box-shadow: 0.0625rem 0 0 var(--secondary-color-200);
      width: fit-content;
      top: 0;
      left: 0;
      padding: 0;
      max-width: var(--sidebar-width);
      overflow-x: hidden;
    }

    :global(.navigation-container > button) {
      display: none !important;
    }

    .navigation,
    .navigation:not(.open-navigation) {
      display: block;
      border-radius: 0;
      box-shadow: none;
      transform: none;
      transition: 0s;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      overflow-y: auto;
    }
  }
</style>
