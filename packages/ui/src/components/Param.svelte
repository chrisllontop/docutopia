<script lang="ts">
  import Input from "./Input.svelte";

  export let name;
  export let type;
  //   export let hasProperties: boolean = false;
  export let required: boolean = false;
</script>

{#if name && type}
  <div class="param container-flex space-between">
    <div class="param-schema">
      <label class="param-name" for={name}>{name}</label>
      <span class="param-type">{type}</span>
      {#if required}
        <span class="param-required">required</span>
      {/if}
    </div>

    <div class="param-form">
      <Input id={name} {required} />
    </div>
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
    font-size: var(--font-size-s);
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
    max-width: var(--param-form-width);
    margin-left: 0.625rem;
  }
</style>
