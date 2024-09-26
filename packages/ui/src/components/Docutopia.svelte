<script lang="ts">
  import type { SidebarGroup } from "@/types/components";
  import Nav from "./Nav.svelte";
  import Sidebar from "./Sidebar.svelte";

  const groups: SidebarGroup[] = [
    {
      group: "User Operations",
      endpoints: [
        {
          path: "/users",
          method: "GET",
          summary: "Get a list of users",
        },
        {
          path: "/users/{id}",
          method: "PATCH",
          summary: "Update a user by ID",
        },
      ],
    },
    {
      group: "Product Operations",
      endpoints: [
        {
          path: "",
          method: "POST",
          summary: "Create a list of users",
        },
        {
          path: "",
          method: "PUT",
          summary: "Get a list of events for an organization",
        },
        {
          path: "",
          method: "DELETE",
          summary: "Get the download URL for the specified package and version",
        },
      ],
    },
    {
      group: "User Operations",
      endpoints: [
        {
          path: "/users",
          method: "GET",
          summary: "Get a list of users",
        },
        {
          path: "/users/{id}",
          method: "PATCH",
          summary: "Update a user by ID",
        },
      ],
    },
    {
      group: "Product Operations",
      endpoints: [
        {
          path: "",
          method: "POST",
          summary: "Create a list of users",
        },
        {
          path: "",
          method: "PUT",
          summary: "Get a list of events for an organization",
        },
        {
          path: "",
          method: "DELETE",
          summary: "Get the download URL for the specified package and version",
        },
      ],
    },
    {
      group: "User Operations",
      endpoints: [
        {
          path: "/users",
          method: "GET",
          summary: "Get a list of users",
        },
        {
          path: "/users/{id}",
          method: "PATCH",
          summary: "Update a user by ID",
        },
      ],
    },
    {
      group: "Product Operations",
      endpoints: [
        {
          path: "",
          method: "POST",
          summary: "Create a list of users",
        },
        {
          path: "",
          method: "PUT",
          summary: "Get a list of events for an organization",
        },
        {
          path: "",
          method: "DELETE",
          summary: "Get the download URL for the specified package and version",
        },
      ],
    },
    {
      group: "User Operations",
      endpoints: [
        {
          path: "/users",
          method: "GET",
          summary: "Get a list of users",
        },
        {
          path: "/users/{id}",
          method: "PATCH",
          summary: "Update a user by ID",
        },
      ],
    },
    {
      group: "Product Operations",
      endpoints: [
        {
          path: "",
          method: "POST",
          summary: "Create a list of users",
        },
        {
          path: "",
          method: "PUT",
          summary: "Get a list of events for an organization",
        },
        {
          path: "",
          method: "DELETE",
          summary: "Get the download URL for the specified package and version",
        },
      ],
    },
    {
      group: "User Operations",
      endpoints: [
        {
          path: "/users",
          method: "GET",
          summary: "Get a list of users",
        },
        {
          path: "/users/{id}",
          method: "PATCH",
          summary: "Update a user by ID",
        },
      ],
    },
    {
      group: "Product Operations",
      endpoints: [
        {
          path: "",
          method: "POST",
          summary: "Create a list of users",
        },
        {
          path: "",
          method: "PUT",
          summary: "Get a list of events for an organization",
        },
        {
          path: "",
          method: "DELETE",
          summary: "Get the download URL for the specified package and version",
        },
      ],
    },
    {
      group: "User Operations",
      endpoints: [
        {
          path: "/users",
          method: "GET",
          summary: "Get a list of users",
        },
        {
          path: "/users/{id}",
          method: "PATCH",
          summary: "Update a user by ID",
        },
      ],
    },
    {
      group: "Product Operations",
      endpoints: [
        {
          path: "",
          method: "POST",
          summary: "Create a list of users",
        },
        {
          path: "",
          method: "PUT",
          summary: "Get a list of events for an organization",
        },
        {
          path: "",
          method: "DELETE",
          summary: "Get the download URL for the specified package and version",
        },
      ],
    },
    {
      group: "User Operations",
      endpoints: [
        {
          path: "/users",
          method: "GET",
          summary: "Get a list of users",
        },
        {
          path: "/users/{id}",
          method: "PATCH",
          summary: "Update a user by ID",
        },
      ],
    },
    {
      group: "Product Operations",
      endpoints: [
        {
          path: "",
          method: "POST",
          summary: "Create a list of users",
        },
        {
          path: "",
          method: "PUT",
          summary: "Get a list of events for an organization",
        },
        {
          path: "",
          method: "DELETE",
          summary: "Get the download URL for the specified package and version",
        },
      ],
    },
    {
      group: "User Operations",
      endpoints: [
        {
          path: "/users",
          method: "GET",
          summary: "Get a list of users",
        },
        {
          path: "/users/{id}",
          method: "PATCH",
          summary: "Update a user by ID",
        },
      ],
    },
    {
      group: "Product Operations",
      endpoints: [
        {
          path: "",
          method: "POST",
          summary: "Create a list of users",
        },
        {
          path: "",
          method: "PUT",
          summary: "Get a list of events for an organization",
        },
        {
          path: "",
          method: "DELETE",
          summary: "Get the download URL for the specified package and version",
        },
      ],
    },
    {
      group: "User Operations",
      endpoints: [
        {
          path: "/users",
          method: "GET",
          summary: "Get a list of users",
        },
        {
          path: "/users/{id}",
          method: "PATCH",
          summary: "Update a user by ID",
        },
      ],
    },
    {
      group: "Product Operations",
      endpoints: [
        {
          path: "",
          method: "POST",
          summary: "Create a list of users",
        },
        {
          path: "",
          method: "PUT",
          summary: "Get a list of events for an organization",
        },
        {
          path: "",
          method: "DELETE",
          summary: "Get the download URL for the specified package and version",
        },
      ],
    },
    {
      group: "User Operations",
      endpoints: [
        {
          path: "/users",
          method: "GET",
          summary: "Get a list of users",
        },
        {
          path: "/users/{id}",
          method: "PATCH",
          summary: "Update a user by ID",
        },
      ],
    },
    {
      group: "Product Operations",
      endpoints: [
        {
          path: "",
          method: "POST",
          summary: "Create a list of users",
        },
        {
          path: "",
          method: "PUT",
          summary: "Get a list of events for an organization",
        },
        {
          path: "",
          method: "DELETE",
          summary: "Get the download URL for the specified package and version",
        },
      ],
    },
    {
      group: "User Operations",
      endpoints: [
        {
          path: "/users",
          method: "GET",
          summary: "Get a list of users",
        },
        {
          path: "/users/{id}",
          method: "PATCH",
          summary: "Update a user by ID",
        },
      ],
    },
    {
      group: "Product Operations",
      endpoints: [
        {
          path: "",
          method: "POST",
          summary: "Create a list of users",
        },
        {
          path: "",
          method: "PUT",
          summary: "Get a list of events for an organization",
        },
        {
          path: "",
          method: "DELETE",
          summary: "Get the download URL for the specified package and version",
        },
      ],
    },
    {
      group: "User Operations",
      endpoints: [
        {
          path: "/users",
          method: "GET",
          summary: "Get a list of users",
        },
        {
          path: "/users/{id}",
          method: "PATCH",
          summary: "Update a user by ID",
        },
      ],
    },
    {
      group: "Product Operations",
      endpoints: [
        {
          path: "",
          method: "POST",
          summary: "Create a list of users",
        },
        {
          path: "",
          method: "PUT",
          summary: "Get a list of events for an organization",
        },
        {
          path: "",
          method: "DELETE",
          summary: "Get the download URL for the specified package and version",
        },
      ],
    },
    {
      group: "User Operations",
      endpoints: [
        {
          path: "/users",
          method: "GET",
          summary: "Get a list of users",
        },
        {
          path: "/users/{id}",
          method: "PATCH",
          summary: "Update a user by ID",
        },
      ],
    },
    
  ];
</script>

<main>
  <Nav>
    <Sidebar {groups} />
  </Nav>
</main>

<style>
  :global(*) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: var(--primary-font);
  }
  :global(a) {
    text-decoration: none;
  }
  main {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    background-color: var(--background-color);
    display: flex;
  }
</style>
