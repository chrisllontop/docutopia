<script lang="ts">
  import type { BodyParam } from "@/types/components";

  import Card from "./Card.svelte";
  import ContainerParam from "./ContainerParam.svelte";
  import OptionParam from "./OptionParam.svelte";
  export let oneOf: BodyParam["oneOf"] = [];
  export let properties: BodyParam["properties"] = [];
  export let required: BodyParam["required"] = [];
</script>

{#if properties?.length}
  <div class="body-param">
    <Card>
      <form>
        {#each properties as property (property.name)}
          <ContainerParam {property} {required} />
        {/each}
      </form>
    </Card>
  </div>
{:else if oneOf?.length}
  <OptionParam {oneOf} />
{/if}
