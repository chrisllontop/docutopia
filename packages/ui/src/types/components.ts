export interface SidebarGroup {
  group: string;
  endpoints: {
    method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
    summary: string;
    path: string;
  }[];
}
