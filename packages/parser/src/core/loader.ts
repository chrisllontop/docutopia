import * as yaml from "js-yaml";
import type {OpenAPISpec} from "@/types/openapi";

export class SpecLoader {
  static async load(source: string): Promise<OpenAPISpec> {
    if (SpecLoader.isUrl(source)) {
      return SpecLoader.loadFromUrl(source);
    }
    throw new Error("Invalid source provided. Please provide a valid URL.");
  }

  private static isUrl(source: string): boolean {
    return /^https?:\/\//.test(source);
  }

  private static async loadFromUrl(url: string): Promise<OpenAPISpec> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch OpenAPI spec from URL: ${url}`);
    }
    const contentType = response.headers.get("content-type");
    const text = await response.text();

    if (contentType?.includes("application/json")) {
      return <OpenAPISpec>JSON.parse(text);
    } else if (
      contentType?.includes("application/x-yaml") ||
      contentType?.includes("text/yaml")
    ) {
      return <OpenAPISpec>yaml.load(text);
    } else {
      throw new Error("Unsupported content type. Please provide JSON or YAML.");
    }
  }
}
