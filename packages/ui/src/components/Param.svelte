<script lang="ts">
  import Input from "./Input.svelte";

  export let name;
  export let type;
  export let description = "";
  export let hasProperties: boolean = false;
  export let isRequired: boolean = false;
</script>

{#if name && type}
  <div class="param">
    <div class="container-flex space-between">
      <div class="param-schema">
        <div class="param-header">
          <label class="param-name" for={name}>{name}</label>
          <span class="param-type">{type}</span>
          {#if isRequired}
            <span class="param-required">required</span>
          {/if}
        </div>
        {#if description}
          <div class="param-description">
            <p>{description}</p>
          </div>
        {/if}
      </div>

      {#if !hasProperties}
        <div class="param-form">
          <Input id={name} required={isRequired} />
        </div>
      {/if}
    </div>

    <slot></slot>
  </div>
{/if}

<style>
  .param {
    padding: 0.625rem;
    text-transform: lowercase;
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
  .param-form {
    width: var(--param-form-width);
    min-width: var(--param-form-width);
    margin-left: 0.625rem;
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
