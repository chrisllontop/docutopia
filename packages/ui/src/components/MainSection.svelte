<script lang="ts">
  import type { BodyParam as BodyParamType } from "@/types/components";
  import BodyParam from "./BodyParam.svelte";

  export let bodyParamProps: BodyParamType;
</script>

<div>
  <BodyParam {...bodyParamProps} />
</div>
