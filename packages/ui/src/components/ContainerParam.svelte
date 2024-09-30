<script lang="ts">
  import type { Param as ParamType } from "@/types/components";
  import Param from "./Param.svelte";
  import OptionParam from "./OptionParam.svelte";

  export let property: ParamType;
  export let required: string[] = [];
</script>

{#if property?.oneOf?.length}
  <OptionParam oneOf={property.oneOf} />
{:else}
  <Param {...property} {required} />
{/if}
