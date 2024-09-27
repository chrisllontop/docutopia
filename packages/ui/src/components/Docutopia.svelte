<script lang="ts">
  import type { BodyParam, SidebarGroup } from "@/types/components";
  import Nav from "./Nav.svelte";
  import Sidebar from "./Sidebar.svelte";
  import MainSection from "./MainSection.svelte";

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
  const bodyParamProps: BodyParam = {
    properties: [
      {
        name: "name",
        type: "string",
        description:
          "The environment name. Must be unique within the project.\n\nMust have a length between 1 and 100 characters.",
      },
      { name: "email", type: "string" },
      { name: "phone", type: "string" },
      {
        name: "address",
        type: "object",
        properties: [
          { name: "streetAddress", type: "string" },
          { name: "locality", type: "string" },
          { name: "region", type: "string" },
          { name: "postalCode", type: "string" },
          { name: "country", type: "string" },
        ],
        required: [
          "streetAddress",
          "locality",
          "region",
          "postalCode",
          "country",
        ],
      },
    ],
    required: ["name", "email", "address"],
  };
</script>

<main>
  <Nav>
    <Sidebar {groups} />
  </Nav>
  <MainSection {bodyParamProps} />
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
    background-color: var(--primary-background-color);
    display: flex;
    flex-direction: column;
  }
  :global(.container-flex) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :global(.space-between) {
    justify-content: space-between;
  }
  @media screen and (min-width: 768px) {
    main {
      flex-direction: row;
    }
  }
</style>
