<script lang="ts">
  import type { Param as ParamType } from "@/types/components";
  import Select from "./Select.svelte";
  import Input from "./Input.svelte";

  export let enumOptions: ParamType["enumOptions"] = [];
  export let isRequiredParam: boolean;
  export let name: string = "";
</script>

<div class="param-field">
  {#if enumOptions?.length}
    <Select id={name} options={enumOptions} />
  {:else}
    <Input id={name} required={isRequiredParam} />
  {/if}
</div>

<style>
  .param-field {
    width: var(--param-form-width);
    min-width: var(--param-form-width);
    margin-left: 0.625rem;
  }
</style>
