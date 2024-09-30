<script lang="ts">
  import type { Param as ParamType } from "@/types/components";

  import Button from "./Button.svelte";
  import Close from "./Icon/Close.svelte";
  import Details from "./Details.svelte";
  import ParamField from "./ParamField.svelte";

  export let type: ParamType["type"] = "";
  export let items: ParamType["items"] | undefined = undefined;

  let totalItems = 0;
  const handleAddNewItem = () => {
    totalItems += 1;
  };
</script>

{#if items?.type}
  <div class="field-array">
    {#if totalItems >= 0}
      {#each Array(totalItems) as _, index (index)}
        <Details icon={Close}>
          <span class="header" slot="header">{items?.type}</span>

          <div class="field-container">
            <ParamField param={items} />
          </div>
        </Details>
      {/each}
    {/if}

    <Button
      variant="filled"
      type="button"
      fullWidth
      uppercase
      icon={Close}
      on:click={handleAddNewItem}
      className="add-button">{`add ${type}`}</Button
    >
  </div>
{/if}

<style>
  .field-array {
    width: 100%;
    display: grid;
    gap: 0.625rem;
  }
  .header {
    text-transform: uppercase;
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semi-bold);
    color: var(--tertiary-color-300);
  }
  :global(.field-array .param-field) {
    min-width: 100% !important;
    margin-left: 0 !important;
  }
  .field-container {
    padding: 0.625rem;
  }
  :global(.add-button > svg) {
    transform: rotate(45deg);
  }
</style>
