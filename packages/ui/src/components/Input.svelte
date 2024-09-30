<script lang="ts">
  export let error: boolean = false;
</script>

<input
  class="input"
  class:input-error={error}
  type="text"
  autocomplete="off"
  {...$$restProps}
/>

<style>
  .input {
    width: 100%;
    min-height: 1.875rem;
    background-color: var(--input-background-color);
    border-radius: 0.31rem;
    font-size: var(--font-size-xm);
    padding: 0 0.625rem;
    border: 0.0625rem solid var(--input-border-color);
    color: var(--tertiary-color-300);
    font-weight: var(--font-weight-medium);
    outline: none;
    user-select: none;
    transition:
      box-shadow 0.15s cubic-bezier(0.16, 1, 0.3, 1),
      -webkit-box-shadow 0.15s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .input:not(.input-error):focus,
  .input:not(.input-error):active {
    border: 0.0625rem solid var(--primary-color-600);
    box-shadow: 0 0 0 0.19rem var(--primary-color-700);
    -webkit-box-shadow: 0 0 0 0.19rem var(--primary-color-700);
  }
  .input-error {
    border: 0.0625rem solid var(--danger-color-100);
  }
  .input-error:focus {
    box-shadow: 0 0 0 0.19rem var(--danger-color-200);
    -webkit-box-shadow: 0 0 0 0.19rem var(--danger-color-200);
  }
  .input:not(:focus):hover {
    border-color: var(--input-hover-border-color);
  }
</style>
