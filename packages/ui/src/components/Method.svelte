<script lang="ts">
  export let type: "GET" | "POST" | "DELETE" | "PUT" | "PATCH" | undefined;

  const method = type?.toLowerCase() ?? "";
</script>

{#if method?.trim()?.length}
  <span class={`method method-${method}`}>{type}</span>
{/if}

<style>
  .method {
    text-transform: uppercase;
    white-space: nowrap;
    width: 2.5rem;
    color: var(--color-base-white);
    line-height: 1rem;
    text-align: center;
    height: 1rem;
    font-size: var(--font-size-xxs);
    border-radius: calc(0.31rem * 1.5);
  }
  .method-get {
    background-color: var(--primary-color-method-get);
    text-shadow:
      0.0625rem 0.0625rem 0 var(--secondary-color-method-get),
      0 0.0625rem 0 var(--secondary-color-method-get),
      0.0625rem 0 0 var(--secondary-color-method-get);
  }
  .method-post {
    background-color: var(--primary-color-method-post);
    text-shadow:
      0.0625rem 0.0625rem 0 var(--secondary-color-method-post),
      0 0.0625rem 0 var(--secondary-color-method-post),
      0.0625rem 0 0 var(--secondary-color-method-post);
  }
  .method-delete {
    background-color: var(--primary-color-method-delete);
    text-shadow:
      0.0625rem 0.0625rem 0 var(--secondary-color-method-delete),
      0 0.0625rem 0 var(--secondary-color-method-delete),
      0.0625rem 0 0 var(--secondary-color-method-delete);
  }
  .method-put {
    background-color: var(--primary-color-method-put);
    text-shadow:
      0.0625rem 0.0625rem 0 var(--secondary-color-method-put),
      0 0.0625rem 0 var(--secondary-color-method-put),
      0.0625rem 0 0 var(--secondary-color-method-put);
  }
  .method-patch {
    background-color: var(--primary-color-method-patch);
    text-shadow:
      0.0625rem 0.0625rem 0 var(--secondary-color-method-patch),
      0 0.0625rem 0 var(--secondary-color-method-patch),
      0.0625rem 0 0 var(--secondary-color-method-patch);
  }
</style>
