<script lang="ts">
  import type { Param as ParamType } from "@/types/components";

  import Card from "./Card.svelte";
  import Param from "./Param.svelte";
  export let properties: ParamType[];
  export let required: string[] = ["test", "test2"];
</script>

{#if properties?.length}
  <div class="body-param">
    <Card>
      <form>
        {#each properties as property (property.name)}
          <Param
            required={required?.length
              ? required.indexOf(property.name) !== -1
              : false}
            {...property}
          />
        {/each}
      </form>
    </Card>
  </div>
{/if}
