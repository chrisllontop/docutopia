<script lang="ts">
  import type { Param as ParamType } from "@/types/components";

  import Button from "./Button.svelte";
  import Close from "./Icon/Close.svelte";
  import Details from "./Details.svelte";
  import ParamField from "./ParamField.svelte";
  import Trash from "./Icon/Trash.svelte";

  export let items: ParamType["items"] | undefined = undefined;

  let totalItems = 0;
  const handleAddNewItem = () => {
    totalItems += 1;
  };
  const handleDeleteCurrentItem = () => {
    totalItems -= 1;
  };
</script>

{#if items?.type}
  <div class="field-array">
    {#if totalItems >= 0}
      {#each Array(totalItems) as _, index (index)}
        <Details icon={Close} open>
          <div class="header container-flex space-between" slot="header">
            <span>{items?.type}</span>
            <Button
              type="button"
              size="xs"
              variant="icon"
              color="danger"
              on:click={handleDeleteCurrentItem}
              icon={Trash}
            />
          </div>

          <div class="field-container">
            <ParamField isArrayFieldChild param={items} />
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
      size="xs"
      className="add-button">{`add ${items?.type}`}</Button
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
    width: 100%;
    text-transform: uppercase;
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semi-bold);
    color: var(--tertiary-color-300);
  }
  :global(.field-array .param-field) {
    min-width: 100% !important;
    margin-left: 0 !important;
  }
  .field-container:not(:has(.field-object)) {
    padding: 0.625rem;
  }
  :global(.add-button svg) {
    transform: rotate(45deg);
  }
</style>
