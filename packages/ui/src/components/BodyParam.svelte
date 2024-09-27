<script lang="ts">
  import type { Param as ParamType } from "@/types/components";

  import Card from "./Card.svelte";
  import Param from "./Param.svelte";
  import ExpandParam from "./ExpandParam.svelte";
  export let properties: ParamType[];
  export let required: string[] = [];
</script>

{#if properties?.length}
  <div class="body-param">
    <Card>
      <form>
        {#each properties as property (property.name)}
          <Param
            isRequired={required?.length
              ? required.indexOf(property.name) !== -1
              : false}
            hasProperties={property?.properties &&
              property.properties.length >= 0}
            {...property}
          >
            {#if property?.properties?.length}
              <ExpandParam {...property} />
            {/if}
          </Param>
        {/each}
      </form>
    </Card>
  </div>
{/if}
