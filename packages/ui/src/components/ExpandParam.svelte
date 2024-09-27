<script lang="ts">
  import type { Param as ParamType } from "@/types/components";
  import Details from "./Details.svelte";
  import Param from "./Param.svelte";
  import Close from "./Icon/Close.svelte";
  export let name: ParamType["name"];
  export let type: ParamType["type"];
  export let properties: ParamType["properties"] = [];
  export let required: ParamType["required"] = [];
</script>

{#if properties?.length}
  <div class="expand-param">
    <Details icon={Close}>
      <span slot="header" class="title">{`${name} ${type}`}</span>

      {#each properties as property (property.name)}
        <Param
          {...property}
          isRequired={required?.length
            ? required.indexOf(property.name) !== -1
            : false}
        />
      {/each}
    </Details>
  </div>
{/if}

<style>
  .expand-param {
    margin-top: 0.625rem;
  }
  .title {
    text-transform: uppercase;
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semi-bold);
    color: var(--tertiary-color-300);
  }
</style>
