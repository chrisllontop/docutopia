<script lang="ts">
  import type { BodyParam } from "@/types/components";
  import ContainerParam from "./ContainerParam.svelte";
  import Details from "./Details.svelte";
  import Close from "./Icon/Close.svelte";
  import Card from "./Card.svelte";

  export let oneOf: BodyParam["oneOf"];
</script>

{#if oneOf?.length}
  <div class="options-container">
    {#each oneOf as { properties, required }, index (index)}
      <Details
        className="param-option"
        variantRadius="none"
        size="M"
        icon={Close}
        variant="filled"
      >
        <span class="param-header" slot="header">{`option ${index + 1}`}</span>
        <div class="param-content">
          <Card variant="secondary">
            {#if properties?.length}
              {#each properties as property}
                <ContainerParam {property} {required} />
              {/each}
            {/if}
          </Card>
        </div>
      </Details>
    {/each}
  </div>
{/if}

<style>
  :global(.param-option:first-child) {
    border-top-left-radius: calc(0.31rem * 1.5);
    border-top-right-radius: calc(0.31rem * 1.5);
  }
  :global(.param-option:last-child) {
    border-bottom-left-radius: calc(0.31rem * 1.5);
    border-bottom-right-radius: calc(0.31rem * 1.5);
  }
  :global(.param-option:not([open]) > summary:focus) {
    margin-bottom: 0.125rem;
  }
  :global(.param-option:not([open]):has(summary:focus) + details) {
    border-top-color: transparent !important;
  }
  :global(.param-option:not(:last-child)) {
    border-bottom-color: transparent !important;
  }
  .param-header {
    text-transform: uppercase;
    text-wrap: nowrap;
    text-overflow: ellipsis;
    color: var(--tertiary-color-400);
    font-size: var(--font-size-xm);
    font-weight: var(--font-weight-semi-bold);
  }
  .param-content {
    margin: 0.625rem;
  }
</style>
