<script lang="ts">
  import type { Param as ParamType } from "@/types/components";

  import ParamFieldStringOrNumber from "./ParamFieldStringOrNumber.svelte";
  import ParamFieldArray from "./ParamFieldArray.svelte";
  import ParamFieldObject from "./ParamFieldObject.svelte";

  export let param: ParamType;
  const { type, name, required, enumOptions, properties, items } = param;

  export let isRequiredParam: boolean = false;

  const isObjectType =
    type === "object" && properties && properties.length >= 0;
  const isArrayType = type === "array" && items;
</script>

<div class:mt-10={isArrayType || isObjectType}>
  {#if isObjectType}
    <ParamFieldObject {required} {type} {name} {properties} />
  {:else if isArrayType}
    <ParamFieldArray {type} {items} />
  {:else}
    <ParamFieldStringOrNumber {name} {isRequiredParam} {enumOptions} />
  {/if}
</div>

<style>
  .mt-10 {
    width: 100%;
    margin-top: 0.625rem;
  }
</style>
