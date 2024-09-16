<script lang="ts">
  export let variant: "right" | "bottom" | "up-down" = "right";
</script>

{#if variant === "up-down"}
  <svg
    class={`chevron chevron-${variant}`}
    fill="none"
    viewBox="0 0 24 24"
    data-name="chevron-up-down"
    role="img"
    ><path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m6 16 6 6 6-6M18 8l-6-6-6 6"
      class="icon-stroke-width"
    ></path></svg
  >
{:else}
  <svg
    class={`chevron chevron-${variant}`}
    xmlns="http://www.w3.org/2000/svg"
    width="16px"
    height="16px"
    viewBox="0 0 24 24"
    ><path
      fill="currentColor"
      d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"
    /></svg
  >
{/if}

<style>
  .chevron:not(.chevron-up-down) > path {
    fill: var(--tertiary-color-200);
    opacity: 0.5;
  }
  .chevron-bottom {
    transform: rotate(90deg);
  }
  .chevron-up-down {
    max-width: 1em;
    max-height: 1em;
    margin-right: -0.25rem;
  }
  .chevron-up-down > path {
    stroke-width: 0.125rem;
    opacity: 0.6;
  }
</style>
