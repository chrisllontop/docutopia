<script lang="ts">
  export let variant: "primary" | "secondary" = "primary";
</script>

<div class={`card ${variant}`}>
  <slot></slot>
</div>

<style>
  .card {
    border: 0.0625rem solid var(--secondary-color-200);
    box-shadow: var(--card-box-shadow);
    border-radius: calc(0.31rem * 1.5);
  }
  .primary {
    background-color: var(--tertiary-color-50);
  }
  .secondary {
    background-color: var(--primary-background-color);
  }
</style>
