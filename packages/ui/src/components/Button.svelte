<script lang="ts">
  import type { ComponentType } from "svelte";

  export let variant: "outlined" | "filled" = "outlined";
  export let icon: ComponentType | null = null;
  export let iconProps: Record<string, string> | null = null;
  export let fullWidth: boolean = false;
  export let className: string = "";
  export let uppercase: boolean = false;
</script>

<button
  class={`button ${variant}-button ${className}`}
  class:button-full-width={fullWidth}
  class:button-uppercase={uppercase}
  on:click
  {...$$restProps}
>
  <slot></slot>
  {#if icon}
    <svelte:component this={icon} {...iconProps} />
  {/if}
</button>

<style>
  .button {
    all: unset;
    cursor: pointer;
    font-size: var(--font-size-xm);
    line-height: 1.4;
    font-weight: var(--font-weight-semi-bold);
    white-space: nowrap;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0.31rem 1.25rem;
    color: var(--tertiary-color-300);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.31rem;
    min-height: 1.875rem;
    border: 0.0625rem solid var(--tertiary-color-100);
    border-radius: 0.31rem;
  }
  .outlined-button {
    background-color: var(--secondary-color-100);
  }
  .filled-button {
    background-color: var(--primary-background-color);
  }
  .button-uppercase {
    text-transform: uppercase;
  }
  .button-full-width {
    width: 100%;
  }
</style>
