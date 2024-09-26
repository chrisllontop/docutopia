<script lang="ts">
  import type { BodyParam as BodyParamType } from "@/types/components";
  import BodyParam from "./BodyParam.svelte";

  export let bodyParamProps: BodyParamType;
</script>

<article>
  <BodyParam {...bodyParamProps} />
</article>

<style>
  article {
    width: 100%;
    padding: 1.87rem 1.94rem;
    max-width: 50rem;
  }
  @media screen and (min-width: 768px) {
    article {
      margin-left: var(--sidebar-width-desktop);
    }
  }
</style>
