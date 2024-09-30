export interface SidebarGroup {
  group: string;
  endpoints: {
    method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
    summary: string;
    path: string;
  }[];
}

export interface Param {
  name?: string;
  description?: string;
  type: string;
  required?: string[];
  properties?: Param[];
  enumOptions?: SelectOptions;
  oneOf?: Option[];
  items?: Param;
}

export interface Option {
  type: string;
  properties?: Param[];
  required?: string[];
}

export interface BodyParam {
  properties?: Param[];
  required?: string[];
  oneOf?: Option[];
}

export type SelectOptions = (string | number | boolean)[];
