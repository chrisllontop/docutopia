<script lang="ts">
  import type { SidebarGroup } from "@/types/components";
  import SidebarItem from "./SidebarItem.svelte";

  export let groups: SidebarGroup[] = [];
  const currentPath = "/users";

  const isChildrenActive = (children: SidebarGroup["endpoints"]) => {
    if (!children.length) return false;

    return children.some((child) => child.path === currentPath);
  };
</script>

{#if groups?.length}
  <div class="sidebar">
    <ul>
      {#each groups as { group, endpoints }}
        <SidebarItem
          name={group}
          isParent={endpoints?.length > 0}
          isParentExpanded={isChildrenActive(endpoints)}
        >
          {#if endpoints.length}
            <ul>
              {#each endpoints as { method, summary, path }}
                <SidebarItem
                  name={summary}
                  {method}
                  {path}
                  isActive={currentPath === path}
                />
              {/each}
            </ul>
          {/if}
        </SidebarItem>
      {/each}
    </ul>
  </div>
{/if}

<style>
  .sidebar {
    padding: 0.625rem 2rem;
  }
  .sidebar ul {
    list-style: none;
    margin: 0 0 0.31rem 0;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    .sidebar {
      padding: 0.31rem 2rem;
    }
  }

</style>
