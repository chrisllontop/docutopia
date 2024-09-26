export interface SidebarGroup {
  group: string;
  endpoints: {
    method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
    summary: string;
    path: string;
  }[];
}

export interface Param {
  name: string;
  type: string;
  required?: boolean;
}

export interface BodyParam {
  properties: Param[];
  required?: string[];
}
