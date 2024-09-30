<script lang="ts">
  import type { Param as ParamType } from "@/types/components";
  import Details from "./Details.svelte";
  import Close from "./Icon/Close.svelte";
  import ContainerParam from "./ContainerParam.svelte";
  export let name: ParamType["name"] = "";
  export let type: ParamType["type"];
  export let properties: ParamType["properties"] = [];
  export let required: ParamType["required"] = [];
</script>

{#if properties?.length}
  <div class="field-object">
    <Details icon={Close}>
      <span slot="header" class="title">{`${name} ${type}`}</span>

      {#each properties as property (property.name)}
        <ContainerParam {property} {required} />
      {/each}
    </Details>
  </div>
{/if}

<style>
  .field-object {
    width: 100%;
  }
  .title {
    text-transform: uppercase;
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semi-bold);
    color: var(--tertiary-color-300);
  }
</style>
