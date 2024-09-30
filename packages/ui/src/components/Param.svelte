<script lang="ts">
  import type { Param as ParamType } from "@/types/components";
  import ParamField from "./ParamField.svelte";

  export let name = "";
  export let type;
  export let description = "";
  export let required: ParamType["required"] = [];
  export let enumOptions: ParamType["enumOptions"] = [];
  export let properties: ParamType["properties"] = [];
  export let items: ParamType["items"] | undefined = undefined;

  const isRequiredParam = required?.indexOf(name) !== -1;
</script>

{#if name && type}
  <div class="param">
    <div class="container-flex space-between">
      <div class="param-schema">
        <div class="param-header">
          <label class="param-name" for={name}>{name}</label>
          <span class="param-type">{type}</span>
          {#if isRequiredParam}
            <span class="param-required">required</span>
          {/if}
        </div>
        {#if description}
          <div class="param-description">
            <p>{description}</p>
          </div>
        {/if}
      </div>

      <ParamField
        param={{ required, type, name, properties, items, enumOptions }}
        {isRequiredParam}
      />
    </div>
  </div>
{/if}

<style>
  .param {
    padding: 0.625rem;
    text-transform: lowercase;
  }
  .param:has(.field-object, .field-array) > div {
    flex-direction: column;
    align-items: flex-start;
  }
  .param:not(:last-child) {
    border-bottom: 0.0625rem solid var(--secondary-color-200);
  }
  .param-name {
    font-size: var(--font-size-xm);
    font-weight: var(--font-weight-semi-bold);
    color: var(--tertiary-color-300);
  }
  .param-type {
    font-size: var(--font-size-xs);
    color: var(--tertiary-color-400);
  }
  .param-required {
    font-size: var(--font-size-xs);
    color: var(--required-color);
  }
  .param-schema {
    line-height: 1.81rem;
    min-height: 1.87rem;
  }
  .param-description > p {
    font-size: var(--font-size-s);
    color: var(--tertiary-color-300);
    line-height: 1.4;
  }
  .param-description > p::first-letter {
    text-transform: uppercase;
  }
</style>
