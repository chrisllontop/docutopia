<script lang="ts">
  import type { ComponentType } from "svelte";

  export let variant: "primary" | "secondary" = "primary";
  export let icon: ComponentType | null = null;
  export let fullWidth: boolean = false;
</script>

<button
  class={`button ${variant}-button`}
  class:button-full-width={fullWidth}
  on:click
  {...$$restProps}
>
  <slot></slot>
  {#if icon}
    <svelte:component this={icon} />
  {/if}
</button>

<style>
  .button {
    all: unset;
    cursor: pointer;
    font-size: var(--font-size-s);
    line-height: 1.4;
    font-weight: var(--font-weight-semi-bold);
    white-space: nowrap;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .primary-button {
    border: 0.0625rem solid var(--tertiary-color-100);
    padding: 0.31rem 1.25rem;
    color: var(--tertiary-color-300);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.31rem;
    background-color: var(--secondary-color-100);
    min-height: 1.875rem;
    border-radius: 0.31rem;
  }
  .button-full-width {
    width: 100%;
  }
</style>
