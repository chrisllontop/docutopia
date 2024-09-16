<script lang="ts">
  import Chevron from "./Icon/Chevron.svelte";
  import Method from "./Method.svelte";

  export let name: string;
  export let method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH" | undefined =
    undefined;
  export let path: string = "";
  export let isActive: boolean = false;
  export let isParent: boolean = false;
  export let isParentExpanded: boolean = false;

  const handleExpand = () => {
    isParentExpanded = !isParentExpanded;
  };
</script>

<li
  class="sidebar-item"
  class:sidebar-item-parent={isParent}
  class:sidebar-item-active={isActive}
>
  {#if isParent}
    <div
      tabindex="0"
      role="button"
      on:click={handleExpand}
      on:keydown={(e) => e.key === "Enter" && handleExpand()}
    >
      <span class="sidebar-parent-label"
        ><Chevron variant={isParentExpanded ? "bottom" : "right"} />{name ??
          ""}</span
      >
    </div>
    {#if isParentExpanded}
      <slot></slot>
    {/if}
  {:else}
    <a href={path} class="sidebar-link">
      <span>{name ?? ""}</span>
      <Method type={method} />
    </a>
  {/if}
</li>

<style>
  .sidebar-item {
    list-style: none;
    cursor: pointer;
    margin-top: 0.125rem;
  }
  :global(.sidebar-item-parent > ul) {
    margin-left: 0.31rem !important;
  }
  .sidebar-parent-label {
    width: 100%;
    display: inline-block;
    padding: 0.18rem 0.31rem 0.18rem 0.31rem;
  }
  .sidebar-parent-label,
  .sidebar-link {
    border-radius: 0.31rem;
    color: var(--tertiary-color-200);
    font-size: var(--font-size-s);
    word-break: break-word;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .sidebar-link {
    justify-content: space-between;
    padding: 0.18rem 0.31rem 0.18rem 0.93rem;
  }
  .sidebar-item-active > .sidebar-link,
  .sidebar-item-parent > div:active .sidebar-parent-label {
    background-color: var(--primary-color-200);
    color: var(--sidebar-item-selected-color);
  }
  .sidebar-item:not(.sidebar-item-active) > .sidebar-link:hover,
  .sidebar-parent-label:hover {
    background-color: var(--tertiary-color-50);
  }
</style>
