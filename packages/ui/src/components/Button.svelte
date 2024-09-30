<script lang="ts">
  import type { ComponentType } from "svelte";

  export let variant: "outlined" | "filled" | "icon" = "outlined";
  export let icon: ComponentType | null = null;
  export let iconProps: Record<string, string> | null = null;
  export let fullWidth: boolean = false;
  export let className: string = "";
  export let uppercase: boolean = false;
  export let size: "xs" | "s" = "s";
  export let color: "danger" | "default" = "default";
</script>

<button
  class={`button ${variant}-button-variant ${className} ${size} ${color}-button-color`}
  class:button-full-width={fullWidth}
  class:button-uppercase={uppercase}
  on:click
  {...$$restProps}
>
  <slot></slot>
  {#if icon}
    <span class="icon-button container-flex">
      <svelte:component this={icon} {...iconProps} />
    </span>
  {/if}
</button>

<style>
  .button {
    all: unset;
    cursor: pointer;
    line-height: 1.4;
    font-weight: var(--font-weight-semi-bold);
    white-space: nowrap;
    justify-content: space-between;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.31rem;
    min-height: 1.875rem;
    border-radius: 0.31rem;
  }
  .danger-button-color {
    color: var(--danger-color-100);
  }
  .default-button-color {
    color: var(--tertiary-color-300);
  }
  .danger-button-color .icon-button:hover {
    background-color: var(--danger-color-50);
  }
  .default-button-color .icon-button:hover {
    background-color: var(--secondary-color-500);
  }
  .outlined-button-variant,
  .filled-button-variant {
    border: 0.0625rem solid var(--tertiary-color-100);
  }
  .outlined-button-variant {
    background-color: var(--secondary-color-100);
  }
  .filled-button-variant {
    background-color: var(--primary-background-color);
  }
  .xs {
    padding: 0.0625rem 0.375rem;
    font-size: var(--font-size-xs);
  }
  .xs > .icon-button {
    border-radius: 0.31rem;
    min-width: 1.375rem;
    min-height: 1.375rem;
  }
  .s {
    padding: 0.31rem 1.25rem;
    font-size: var(--font-size-xm);
  }
  .s > .icon-button {
    min-width: 1rem;
    min-height: 1rem;
  }
  .icon-button {
    border-radius: 0.31rem;
  }
  :global(.icon-button > svg) {
    width: 0.75rem;
    height: 0.75rem;
    margin-right: 0 !important;
  }
  .button-uppercase {
    text-transform: uppercase;
  }
  .button-full-width {
    width: 100%;
  }
</style>
