<script lang="ts">
  import type { SelectOptions } from "@/types/components";

  export let options: SelectOptions;
</script>

{#if options?.length}
  <select {...$$restProps}>
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
{/if}

<style>
  select {
    appearance: none;
    background-color: var(--input-background-color);
    cursor: pointer;
    width: 100%;
    min-height: 1.875rem;
    border-radius: 0.31rem;
    border: 0.0625rem solid var(--input-border-color);
    color: var(--tertiary-color-300);
    word-break: normal;
    padding: 0 1.875rem 0 0.625rem;
    font-size: var(--font-size-xm);
    font-weight: var(--font-weight-medium);
    color-scheme: light dark;
    background-image: var(--select-chevron);
    background-position: calc(100% - 0.31rem) 50%;
    background-repeat: no-repeat;
  }
  select:focus {
    border-color: var(--primary-color-600);
    box-shadow: 0 0 0 0.19rem var(--primary-color-700);
    outline: none;
  }
  select:not(:focus):hover {
    border-color: var(--input-hover-border-color);
  }
</style>
