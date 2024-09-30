<script lang="ts">
  import type { ComponentType } from "svelte";

  export let className: string = "";
  export let variant: "outlined" | "filled" = "outlined";
  export let variantRadius: "all" | "none" = "all";
  export let size: "S" | "M" = "S";
  export let icon: ComponentType | null = null;
  export let showSlotOnly: boolean = false;
  export let open: boolean = false;
</script>

{#if !showSlotOnly}
  <details
    class={`${size} ${className} ${variantRadius}-radius ${variant}`}
    {open}
  >
    <summary class="space-between">
      <slot name="header"></slot>
      {#if icon}
        <span class="icon container-flex">
          <svelte:component this={icon} />
        </span>
      {/if}
    </summary>

    <slot></slot>
  </details>
{:else}
  <slot></slot>
{/if}

<style>
  details {
    background-color: var(--secondary-background-color);
    border: 0.0625rem solid var(--secondary-color-200);
    position: relative;
    overflow: visible;
  }
  details.all-radius {
    border-radius: calc(0.31rem * 1.5);
  }
  details[open] > summary {
    border-bottom: 0.0625rem solid var(--secondary-color-200);
  }
  summary:focus {
    border-color: var(--primary-color-600);
    border-radius: calc(0.31rem * 1.5);
    box-shadow:
      0 0 0 0.0625rem var(--primary-color-600),
      0 0 0 0.19rem var(--primary-color-700);
  }
  details[open] > summary:focus {
    border-radius: calc(0.31rem * 1.5) calc(0.31rem * 1.5) 0 0;
  }
  details.filled {
    background-color: var(--tertiary-color-50);
  }
  .icon:hover {
    background-color: var(--secondary-color-500);
  }
  .icon {
    border-radius: 0.31rem;
    min-width: 1.37rem;
    min-height: 1.37rem;
  }
  :global(.icon > svg) {
    width: 0.75rem;
    height: 0.75rem;
    transform: rotate(45deg);
    margin-right: 0 !important;
  }
  :global(.icon > svg > path) {
    stroke: var(--primary-text);
  }
  :global(details[open] > summary > .icon > svg) {
    transform: none;
  }

  .S > summary {
    padding: 0.0625rem 0.375rem;
  }
  .M > summary {
    padding: 1.25rem 0.625rem;
  }
  summary {
    user-select: none;
    cursor: pointer;
    height: 1.875rem;
    list-style: none;
    display: flex;
    align-items: center;
    outline: none;
  }
</style>
