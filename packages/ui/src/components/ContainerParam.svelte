<script lang="ts">
  import type { Param as ParamType } from "@/types/components";
  import Param from "./Param.svelte";
  import OptionParam from "./OptionParam.svelte";
  import ParamField from "./ParamField.svelte";

  export let property: ParamType;
  export let required: string[] = [];

  const handleCheckIfRequired = (required?: string[]) => {
    if (!property?.name || !required?.length) return false;

    return required?.indexOf(property.name) !== -1;
  };
  const isRequiredParam =
    handleCheckIfRequired(required) ||
    handleCheckIfRequired(property?.required);
</script>

{#if property?.oneOf?.length}
  <OptionParam oneOf={property.oneOf} />
{:else}
  <Param {...property} {isRequiredParam}>
    <ParamField param={property} {isRequiredParam} />
  </Param>
{/if}
